import { basename } from 'path';
import { lookup } from 'mime';

import http from 'http';
import { request } from 'https';
import { sign } from 'aws4';
import { readFileSync } from 'fs';

//var doCredentials = JSON.parse(fs.readFileSync(__dirname+'/config/do/credentials.json', "utf8"));

const { accessKeyId, secretAccessKey, regionName, bucketName, serviceName } = {
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  regionName: process.env.REGION_NAME,
  bucketName: process.env.BUCKET_NAME,
  serviceName: process.env.SERVICE_NAME
};

const spacesConfig = {
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey
};

const host = bucketName+'.'+regionName+'.digitaloceanspaces.com';
const regionHost = regionName+'.digitaloceanspaces.com';

var upload = function(key,mimeType,file_path,callback) {
  var body = readFileSync(file_path);
  var opts = sign({
    host: host,
    method: 'PUT',
    path: '/'+key,
    region: regionName,
    service: serviceName,
    headers: {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': mimeType,
      'x-amz-acl': 'public-read',
      accept: 'application/json'
    },
    body: body
  },spacesConfig);
  //console.log(opts);
  var s3Req = request(opts, function(api_res){
    var data = "";
    //console.log("Status: "+api_res.statusCode);
    api_res.on('data', function (chunk) {
      data += chunk;
    });
    api_res.on('error', function (err) {
      callback(err,null);
    });
    api_res.on('end', function (chunk) {
      //console.log(data);
      callback(null,{
        url: "https://"+host+"/"+key
      });
    });
  });
  s3Req.write(body);
  s3Req.end();
}

var get = function(host, path, callback) {
  var opts = sign({
    host: host,
    method: 'GET',
    path: path,
    region: regionName,
    service: serviceName,
    headers: {
      accept: 'application/json'
    }
  },spacesConfig);
  //console.log(opts);
  var s3Req = request(opts, function(api_res){
    var data = "";
    //console.log("Status: "+api_res.statusCode);
    api_res.on('data', function (chunk) {
      data += chunk;
    });
    api_res.on('error', function (err) {
      callback(err,null);
    });
    api_res.on('end', function (chunk) {
      //console.log(data);
      try{
        callback(null, JSON.parse(data));
      } catch(error) {
        callback(error, null);
      }
    });
  });
  s3Req.end();
}

export function uploadServerFile(file_path, folder, callback) {
  var file_name = basename(file_path).replace(/\s/g,'_');
  var key = folder+"/"+file_name;
  var body = readFileSync(file_path);
  upload(key,lookup(file_path),file_path,callback);
}

export function uploadFile(file, folder, callback){
  var file_path = file.path;
  var file_name = file.originalname.replace(/\s/,'');
  var key = "uploads/"+file_name;
  console.log(file);
  upload(key,file.mimetype,file_path,callback);
}

export function listBuckets(callback){
  get(regionHost,'',callback);
}

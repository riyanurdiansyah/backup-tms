// import { query } from "@/config/db";
// import { promises as fs } from "fs";

// const get = async () => {
//   const result = (await query({
//     query: `
//                 SELECT testimoni_id, nama, rating, image, description
//                 FROM tb_testimoni;
//             `,
//   })) as any[];

//   return result;
// };

// const post = async (formData: FormData, id: string) => {
//   const nama = formData.get("nama");
//   const rating = formData.get("rating");
//   const description = formData.get("description");
//   const imgPath = "/img/" + id + ".png";

//   const result = (await query({
//     query: `
//             INSERT INTO tb_testimoni (testimoni_id, nama, rating, image, description)
//             VALUES (?, ?, ?, ?, ?);
//         `,
//     values: [id, nama, rating, imgPath, description],
//   })) as any[];
// };

// const getById = async (id: string) => {
//   const result = (await query({
//     query: `
//             SELECT testimoni_id, nama, rating, image, description
//             FROM tb_testimoni
//             WHERE testimoni_id = ?;
//         `,
//     values: [id],
//   })) as any[];

//   return result;
// };

// const put = async (testimoni: Testimoni) => {
//   const result = await query({
//     query: `
//             UPDATE tb_testimoni
//             SET testimoni_id = ?, nama = ?, rating = ?, image = ?, description = ?
//             WHERE testimoni_id = ?;
//         `,
//     values: [
//       testimoni.testimoni_id,
//       testimoni.nama,
//       testimoni.rating,
//       testimoni.image,
//       testimoni.description,
//       testimoni.testimoni_id,
//     ],
//   });

//   return result;
// };

// const deleteById = async (id: string) => {
//   const result = (await query({
//     query: `
//             DELETE FROM tb_testimoni WHERE testimoni_id = ?
//           `,
//     values: [id],
//   })) as any[];

//   return result;
// };

// const checkExtensionImage = async (file: Blob) => {
//   if (
//     file.type.indexOf("jpg") === -1 &&
//     file.type.indexOf("png") === -1 &&
//     file.type.indexOf("webp") === -1 &&
//     file.type.indexOf("jpeg") === -1
//   ) {
//     return false;
//   }

//   return true;
// };

// const uploadImage = async (file: Blob, id: string) => {
//   const imgPath = "/img/" + id + ".png";
//   const buffer = Buffer.from(await file.arrayBuffer());
//   fs.writeFile(`public${imgPath}`, buffer);
// };

// export default {
//   get,
//   post,
//   getById,
//   put,
//   deleteById,
//   checkExtensionImage,
//   uploadImage,
// };

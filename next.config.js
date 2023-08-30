const path = require("path");

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "blog-media.lifepal.co.id",
      "isuzu-astra.com",
      "storage-x.sgp1.cdn.digitaloceanspaces.com",
    ],
  },
};

const path = require('path')

module.exports = {
  target: 'serverless',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains:['jk-docs.s3.us-east-2.amazonaws.com']
  },
};

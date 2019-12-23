// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb://lucasgabule:FacebookLover24@cluster0-shard-00-00-crjhu.mongodb.net:27017,cluster0-shard-00-01-crjhu.mongodb.net:27017,cluster0-shard-00-02-crjhu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};

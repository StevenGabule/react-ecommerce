// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb://:@cluster0-shard-00-00-crjhu.mongodb.net:27017,cluster0-shard-00-01-crjhu.mongodb.net:27017,cluster0-shard-00-02-crjhu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    JWT_SECRET: "nadadnadkanduandasdncd",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/johnlook/image/upload",
    CLOUDINARY_API_KEY: "1626397hk25592421",
    CLOUDINARY_API_SECRET: "G9Tndj3nkhaStcQi9VmeMSsHZOrrE",
    STRIPE_SECRET_KEY: "sk_thkest_Mt0e9w6oIoxRFJXbmblOhwYi"
  }
};

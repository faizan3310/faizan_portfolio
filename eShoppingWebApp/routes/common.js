var MongoClient = require("mongodb").MongoClient;
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function getMongoConnection(userData, collectionName, pageType) {
  await mongoClient.connect();
  const db = mongoClient.db("shoppingWebApp");
  const collection = db.collection(collectionName);
  if (pageType == "login") {
    return collection
      .find({ accountId: userData.accountId, password: userData.password })
      .toArray();
  } else if (pageType == "newSignup") {
    return collection.insertOne(userData);
  }
}

var utilData = {
  dbConDetails: {
    dbName: "shoppingWebApp",
    mongoClient: client,
    getMongoConnection: (data, colName, pageType) => {
      return getMongoConnection(data, colName, pageType);
    },
  },
};

module.exports = utilData;

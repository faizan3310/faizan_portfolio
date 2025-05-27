const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

var dbUtils = {
  doDbCommunication(data, type, cname) {
    return getMongoDbConnection(data, type, cname);
  },
};

var getMongoDbConnection = async (userData, actionType, collectionName) => {
  await client.connect();
  console.log("DB Connected successfully to server");
  console.log(userData);
  const db = client.db("Cartify");

  const collection = db.collection(collectionName);

  var result;
  switch (actionType) {
    case "findUser":
      result = collection.find(userData).toArray();
      break;
    case "createUser":
      result = collection.insertOne(userData);
      break;
    case "getProductData":
      result = collection.find(userData).toArray();
      break;
  }

  return result;
}

module.exports = dbUtils;



const { json } = require('express');
const { MongoClient } = require('mongodb');
const dburl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dburl);
var dbDetails = {
    getDataBaseConnection(userData, collectionName, actionType) {
        return getDbConnection(userData, collectionName, actionType);
    },
    closeDbConnection() {
        mongoClient.close();
    }
}

async function getDbConnection(userData, collectionName, actionType) {
    // Use connect method to connect to the server
    await mongoClient.connect();
    const db = mongoClient.db("ekartModelingApp");
    var collection = db.collection(collectionName);
    switch(actionType) {
        case 'validateCred':
            return collection.find({accountId: userData.accountId }).toArray();
            break;
        case 'signup':
            return collection.insertOne(userData);
            break;
        case 'getDetailsRandom':
            // return collection.find(userData).toArray();
            return collection.aggregate([{$sample: {size: 25}}]).toArray();
            // db.empInformation.aggregate([{$sample:{size:3}}]).pretty();
            break;
        case 'getDetails':
            return collection.find(userData).sort({discountPercent: 1}).toArray(); // collection.find({"cateogy": 'mens"})
            // return collection.find().sort({discountPercent: 1}).toArray();
            break;
        case 'addItemTocart':
            return collection.insertOne(userData);
            break;
        case 'checkIsUserAddedItemsToCart':
            var obj = {};
            obj[userData.accountId] = {$exists:true};
            return collection.find(obj).toArray();
            break;
        case 'updateCart':
            var settingObj = {};
            settingObj[userData.accountId] = userData.dataTobeUpdated;          
            return collection.updateOne({_id: userData["_id"]}, {$set: settingObj}, {upsert: true});
            break;
        case 'getAddedProducts':
            var obj = {};
            obj[userData.accountId] = {$exists:true};
            var result = await collection.find(obj).toArray();
            console.log("addedProductsaddedProducts");
            console.log(result)
            console.log(JSON.stringify(result))
            var addedProducts = result[0][userData.accountId];
            console.log(addedProducts)
            var productIdList = [];
            addedProducts.forEach(element => {
                productIdList.push(element.productId);
            });
            collection = db.collection("productDetails");
            return collection.find({"productId": {"$in": productIdList}}).toArray();
            break;
        case 'addNewProduct':
            return collection.insertOne(userData);
    }   
}

module.exports = dbDetails;
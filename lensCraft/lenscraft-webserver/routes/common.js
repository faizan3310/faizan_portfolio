var {MongoClient} = require("mongodb");
const dbUrl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dbUrl);

var mongoDbRef = {
    getMongoDbRef(data, type, collectionName){
        // console.log(data);
        // console.log(type);
        // console.log(collectionName);
        return getDbConnection(data, type, collectionName);
    }
}

async function getDbConnection(userQuery, operationType, collectionName) {
    var queryObj = {};
    await mongoClient.connect(); // connection to the mongo server
    const db = mongoClient.db("lensCraft");
    const collection = db.collection(collectionName);
    if (operationType == "find") {
        return collection.find({userID: userQuery.accountID, password:userQuery.accountPwd}).toArray();
    }else if(operationType == "findPhoto") {
        return collection.find(userQuery).toArray();
    }else if (operationType == "addComments"){
        console.log("From DB Addcomments");
        console.log(userQuery);
        var queryReq = {};
        queryReq[userQuery.photoID] = {$exists:true};
        console.log("queryReq");
        console.log(queryReq)
        collection.find(queryReq).toArray().then((response) => {
            // console.log(response); // response from DB
            if(response.length == 0){ // First time comment on a particular photo id
                console.log("first time comment");
                var insertingDocument = {};
                insertingDocument[userQuery.photoID] = [userQuery];
                return collection.insertOne(insertingDocument);
            }else{ // There is single or more comments already added to this photo id
                // console.log("Second time comment");
                // console.log(response);
                // console.log(userQuery);

                var photoData = response[0][userQuery.photoID];
                // console.log(photoData);
                photoData.push(userQuery);
                var modifyingPhotoData = {};
                modifyingPhotoData[userQuery.photoID] = photoData;
                collection.updateOne({_id: response[0]._id}, {$set: modifyingPhotoData });
            }
        })
    }else if(operationType == "findPhotoComments"){
        var userReqQuery = {}
        userReqQuery[userQuery.photoID] = { $exists: true };
        // console.log("userReqQuery");
        // console.log(userReqQuery);
        return collection.find(userReqQuery).toArray();
    }else if(operationType == "likesAndDislikes"){
        // console.log("from DB");
        // console.log(userQuery);
        collection.find({photoId:userQuery.photoId}).toArray().then((response) => {
            // console.log("From DB");
            var selectedPhotoDetails = response[0];
            // console.log(selectedPhotoDetails);
            var likeCount = selectedPhotoDetails.likes;
            var dislikeCount = selectedPhotoDetails.dislikes;
            // console.log("DB like "+likeCount);
            // console.log("DB dislike "+dislikeCount);
            // console.log(userQuery);
            if(userQuery.isLike){
                likeCount++;
                dislikeCount--;
            }else if(userQuery.isDislike){
                dislikeCount++;
                likeCount--;
            }
            // console.log("updated like "+likeCount);
            // console.log("updated dislike "+dislikeCount);

            // console.log({$set: {likes: likeCount, dislikes: dislikeCount}});
            return collection.updateOne({photoId:userQuery.photoId}, {$set: {likes: likeCount, dislikes: dislikeCount}});
        })
    }else if(operationType == "deleteComments"){
        console.log("From DB delete");
        console.log(userQuery);

        var userReqQuery = {}
        userReqQuery[userQuery.photoID] = { $exists: true };
        console.log("userReqQuery");
        console.log(userReqQuery);

        collection.find(userReqQuery).toArray().then((response)=>{   
            console.log(response);
            var photoData = response[0][userQuery.photoID];
            
            console.log(photoData);
            photoData = photoData.filter((item)=>{
                return item.commentID != userQuery.commentID;
            })

            var modifyingPhotoData = {};
            modifyingPhotoData[userQuery.photoID] = photoData;
            collection.updateOne({_id: response[0]._id}, {$set: modifyingPhotoData });
        })
            
    }
   
}

module.exports = mongoDbRef;
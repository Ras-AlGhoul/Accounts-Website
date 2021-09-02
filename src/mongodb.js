const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017'
const database = 'Task-Manager';


MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error);
    }
    const db = client.db(database);
    db.collection('accounts').insertOne({
        username:'ras-alghul',
        password:'123aaas'
    }).then(result=>console.log(result))
    .catch(error=>console.log(error));
})















// db.collection('users').insertOne({
//     name: 'Yazan',
//     email: 'yazann.abbas@gmail.com',
//     birthdate: 1993
// }, (error, result) => {
//     if (error) {
//         return console.log(error);
//     }
//      console.log(result.insertedId);
// })
// db.collection('tasks').insertMany([{
//     task: 'do laundary',
//     complete: false
// }, {
//     task: 'finish the course',
//     complete: false
// }, {
//     task: 'cook lunch',
//     complete: true
// }],(error, results)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(results.insertedIds);
// })
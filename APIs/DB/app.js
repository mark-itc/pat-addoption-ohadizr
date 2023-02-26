const express = require('express');
const {MongoClient} = require('mongodb');
const client= new MongoClient('mongodb://localhost:27017');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;


async function getCollection(pickedCollection) {
    
    await client.connect();
    const db= client.db('PetsApi');
    const collection= db.collection(`${pickedCollection}`);
    const dataResults = await collection.find({}).toArray();
    // console.log('results to MongoDB0 -DB',results);

    // client.close()
    return dataResults
}
getCollection()



app.get(`/pets`, async (req, res) => {
    const petsResults = getCollection("Pets")
     res.send(await petsResults);
});
app.get(`/users`, async (req, res) => {
    const usersResults = getCollection("Users")
    res.send(await usersResults);
});
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`)

})



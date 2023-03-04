require('dotenv').config();
const express = require('express');
const { initDB } = require('./models/init');
const UsersController = require('./controllers/UsersController');
const PetsController = require('./controllers/PetsController');
const {MongoClient} = require('mongodb');
const client= new MongoClient('mongodb://localhost:27017');
const { AuthMiddleware } = require('./middlewares/AuthMiddleware');
//fix cors issue for http://localhost:3001
const cors = require('cors');


initDB();

const port = process.env.PORT || 8000

const app = express();
app.use(express.json());
app.use(cors());

async function getCollection(pickedCollection) {
    
    await client.connect();
    const db= client.db('PetsApi');
    const collection= db.collection(`${pickedCollection}`);
    const dataResults = await collection.find({}).toArray();
    return dataResults
}
getCollection()





//user Api
// app.get('/userByEmail/:email', UsersController.getUserByEmail)

app.post('/login', UsersController.Login)

app.post('/signUp', UsersController.SignUp)

app.get('/user/:id',AuthMiddleware ,UsersController.GetUserById)

app.get ('/users', UsersController.GetAllUsers) //admin protection
// app.get ('/users', AuthMiddleware, UsersController.GetAllUsers) //admin protection

app.put('/user/:id', UsersController.UpdateUser)


//pets Api

app.get('/pets', PetsController.GetAllPets)

app.post('/pet', PetsController.CreateNewPet) //(Protected to admin only)
// app.post('/pets', AuthMiddleware, PetsController.CreatePets)

app.get('/pet/:id', PetsController.GetPetById)

app.put('/pet/:id', PetsController.UpdatePet)

app.get('/pet', PetsController.GetFilteredPets)

// app.post('/pet/:id/adopt', PetsController.AdoptPet) //user protected

// app.post('/pet/:id/return', PetsController.ReturnPet) //user protected

// app.post('/pet/:id/save', PetsController.SavePet) //user protected

// app.delete('/pet/:id/save',PetsController.DeleteSavedPet) //user protected

// app.get('/pet/user/:id', PetsController.GetPetOwner) 

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`)

})



const { ObjectId } = require("mongodb");

let collection;

module.exports = class PetsDAO {
  static async injectDB(connection) {
    if (!connection) return;

    try {
      collection = await connection.collection("pets");
    } catch (e) {
      console.log(`Could not establish connection to pets collection ${e}`);
    }
  }

  static async createPet(petObject) {
    petObject.created_at = new Date();
    console.log({collection});
    await collection.insertOne({ ...petObject});
  }
  static async getPetById(petId) {
    return await collection.findOne({ _id: new ObjectId(petId) });
  }

  // static async getUserPets(userId) {
  //     return await petsCollection.find({ user_id: userId }).toArray();
  // }
};


// bug scoping issues DX for collection
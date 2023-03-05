const { ObjectId } = require("mongodb");

let collection;

module.exports = class PetsDAO {
  static async injectDB(connection) {
    if (!connection) return;
    try {
      collection = await connection.collection("pets");
      console.log("Connection to pets collection established");
    } catch (e) {
      console.log(`Could not establish connection to users collection ${e}`);
    }
  }
  static async createPet(petObject) {
    petObject.created_at = new Date();
    await collection.insertOne({ ...petObject });
  }

  static async getAllPets() {
    if (!collection) return;
    return await collection.find({}).toArray();
  }
  static async getPetById(id) {
    return await collection.findOne({ _id: new ObjectId(id) });
  }
  static async updatePet(id, updatedValues) {
    if (!collection) return;
    await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name: updatedValues.name,
          type: updatedValues.type,
          breed: updatedValues.breed,
          age: updatedValues.age,
          adoption_Status: updatedValues.adoption_Status,
          wight: updatedValues.wight,
          height: updatedValues.height,
          color: updatedValues.color,
          bio: updatedValues.bio,
        },
      }
    );
  }
  static async deletePet(id) {
    if (!collection) return;
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
 
  // make filtered function that return all pets with the spacified info of the query with adoption_status, type, height, wight, color
  // static async getFilteredPets(query) {
  //   if (!collection) return;
  //   return await collection
  //     .find({
  //       adoption_Status: query.adoption_Status,
  //       type: query.type,
  //       height: query.height,
  //       wight: query.wight,
  //       color: query.color,
  //     })
  //     .toArray();
  // }
    // make filtered function that return all pets with the spacified info of the query with adoption_status, type, height, wight, color if the user did not spacify a value, do not filter by it
    static async getFilteredPets(query) {
        if (!collection) return;
        return await collection.find({
            //map query and filter out the empty values, then find only pets that match the query
            ...Object.keys(query).reduce((acc, key) => {
              if (query[key]) {
                acc[key] = query[key];
              }
              return acc;
            }
            , {})
            

          })
          .toArray();
          
      }
      

    static async updatePet(adopterId, petId, adoption_Status ){

        if (!collection) return;
        await collection.updateOne(
            { _id: new ObjectId(petId) },
            {
              $set: {
                adoption_Status: adoption_Status,
                adopterId: adopterId

              },
            }
          );
    }

};

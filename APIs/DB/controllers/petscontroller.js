
const PetsDAO = require('.././models/PetsDAO');
const { NewPetValidation } = require('../validations/PetValidations');

module.exports = class PetsController {

    static async CreateNewPet(req, res) {
        try {
            const validRequest = NewPetValidation(req.body);
            if (!validRequest) {
                return res.status(400).json({
                    success: false,
                    message: 'Please fill all fields'
                })
            }

            const petObject = req.body;
            
            await PetsDAO.createPet(petObject)
            
            return res.json(req.body)

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async GetAllPets(req, res) {
        try {
            const pets = await PetsDAO.getAllPets();
            res.json(pets);
        } catch (e) {
            console.log(`Error in ${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async GetPetById(req, res) {

        try {
            
            const id = req.params.id;
            const pet = await PetsDAO.getPetById(id);
            if (pet) {
              res.json({
                name: pet.name,
                type: pet.type,
                breed: pet.breed,
                age: pet.age,
                adoption_Status: pet.adoption_Status,
                wight: pet.wight,
                height: pet.height,
                color: pet.color,
                bio:"bio"
              });
            } else {
                res.status(404).send("User not found");
              }
        } catch (e) {
            console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async UpdatePet(req, res) {
        try {
            const id = req.params.id;
            const pet = await PetsDAO.getPetById(id);
            if (pet) {
                const updatedData =  req.body;
                const updatedList = [];
                
                if (updatedData.name) {
                    pet.name = updatedData.name;
                    updatedList.push("name")
                }
                if (updatedData.type) {
                    pet.type = updatedData.type;
                    updatedList.push("type")
                }
                if (updatedData.breed) {
                    pet.breed = updatedData.breed;
                    updatedList.push("breed")
                }
                if (updatedData.age) {
                    pet.age = updatedData.age;
                    updatedList.push("age")
                }
                if (updatedData.adoption_Status) {
                    pet.adoption_Status = updatedData.adoption_Status;
                    updatedList.push("adoption_Status")
                }
                if (updatedData.wight) {
                    pet.wight = updatedData.wight;
                    updatedList.push("wight")
                }
                if (updatedData.height) {
                    pet.height = updatedData.height;
                    updatedList.push("height")
                }
                if (updatedData.color) {
                    pet.color = updatedData.color;
                    updatedList.push("color")
                }
                if (updatedData.bio) {
                    pet.bio = updatedData.bio;
                    updatedList.push("bio")
                }
                await PetsDAO.updatePet(id, pet);
                res.json({
                    success: true,
                    message: "pet updated successfully , new values for " + updatedList.join
                });
            } else {
                res.status(404).send("User not found");
            }
        } catch (e) {
            console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    
    static async GetFilteredPets(req, res) {

        try {
            const filter = req.body;
            console.log(filter);
            const pets = await PetsDAO.getFilteredPets(filter);
            console.log(pets);
            res.json(pets);
        } catch (e) {
            console.log(`Error in ${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    
    
    // static async AdoptPet(req, res) {

    //     try {

    //     } catch (e) {
    //         // console.log(`Error in petsController.CreatePet${e}`);
    //         return res.status(500).json({
    //             success: false,
    //             message: 'unknown error'
    //         });
    //     }
    // }
    // static async ReturnPet(req, res) {

    //     try {

    //     } catch (e) {
    //         // console.log(`Error in petsController.CreatePet${e}`);
    //         return res.status(500).json({
    //             success: false,
    //             message: 'unknown error'
    //         });
    //     }
    // }
    // static async SavePet(req, res) {

    //     try {

    //     } catch (e) {
    //         // console.log(`Error in petsController.CreatePet${e}`);
    //         return res.status(500).json({
    //             success: false,
    //             message: 'unknown error'
    //         });
    //     }
    // }  // static async DeleteSavedPet(req, res) {

    //     try {

    //     } catch (e) {
    //         return res.status(500).json({
    //             success: false,
    //             message: 'unknown error'
    //         });
    //     }
    // }
    // static async GetPetOwner(req, res) {

    //     try {

    //     } catch (e) {
    //         return res.status(500).json({
    //             success: false,
    //             message: 'unknown error'
    //         });
    //     }
    // }
    // static async PetsList(req, res) {

    //     try {

    //         const pets = await PetsDAO.getUserPets(req.currentUser._id);

    //         return res.json({
    //             list: pets
    //         })

    //     } catch (e) {
    //         return res.status(500).json({
    //             success: false,
    //             message: 'unknown error'
    //         });
    //     }
    // }
}

const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken');
const PetsDAO = require('../models/petsDAO');
const { NewPetValidation } = require('../validations/PetValidations');

module.exports = class UsersController {

    static async CreatePet(req, res) {

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
            
            return res.status(200).json({
                success: true,
                message: 'new pet created:'
            })
        } catch (e) {
            console.log(`Error in petsController.CreatePet${e}`);
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


        } catch (e) {

            // console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async PetsListFiltered(req, res) {

        try {

        } catch (e) {
            // console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async AdoptPet(req, res) {

        try {

        } catch (e) {
            // console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async ReturnPet(req, res) {

        try {

        } catch (e) {
            // console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async SavePet(req, res) {

        try {

        } catch (e) {
            // console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async DeleteSavedPet(req, res) {

        try {

        } catch (e) {
            // console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async GetPetOwner(req, res) {

        try {

        } catch (e) {
            // console.log(`Error in petsController.CreatePet${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }
    static async PetsList(req, res) {

        try {

            const pets = await PetsDAO.getUserPets(req.currentUser._id);

            return res.json({
                list: pets
            })

        } catch (e) {
            console.log(`Error in PetsController.CreatePet ${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }

}
    

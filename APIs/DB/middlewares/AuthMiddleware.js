const jwt = require('jsonwebtoken');
const UsersDAO = require('../models/UsersDAO')

module.exports.AuthMiddleware = async function AuthMiddleware(req, res, next) {

    try {
        let token = req.headers['authorization'];
        if (!token) {
            console.log('No token found')
            return res.status(401).send(); 
        }

        token = token.replace('Bearer ', '');
        console.log({token});

        const tokenData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log({tokenData});
        if (!tokenData) {
            console.log('Token data not found')
            return res.status(401).send();
        }

        const userData = await UsersDAO.getUserById(tokenData.user_id);
        if (!userData) {
            console.log('User data not found')
            return res.status(401).send();
        }

        req.currentUser = userData;
        next();
    } catch (e) {
        // console.log(e);
        return res.status(500).send();
    }
}
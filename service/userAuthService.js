
const { Success } = require('../models/common/ResponseMessage');
const UserAuth = require('../models/UserAuth');

async function createUserAuth(data) {
    try {
        const userAuth = new UserAuth(data);
        await userAuth.save();
        return userAuth;
    } catch (error) {
        throw error;
    }
}

async function getAllUserAuths() {
    try {
        const userAuths = await UserAuth.find();
        return userAuths;
    } catch (error) {
        throw error;
    }
}

async function updateUserAuthById(id, data) {
    try {
        const userAuth = await UserAuth.findByIdAndUpdate(id, data, { new: true });
        return userAuth;
    } catch (error) {
        throw error;
    }
}

async function deleteUserAuthById(id) {
    try {   
        await UserAuth.findByIdAndDelete(id);
        return  "UserAuth supprimé";
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUserAuth,
    getAllUserAuths,
    updateUserAuthById,
    deleteUserAuthById
};
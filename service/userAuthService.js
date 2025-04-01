
const { Success } = require('../models/common/ResponseMessage');
const UserAuth = require('../models/UserAuth');

async function createUserAuth(data) {
    const userAuth = new UserAuth(data);
    await userAuth.save();
    return userAuth;
}

async function getAllUserAuths() {
    const userAuths = await UserAuth.find();
    return userAuths;
}

async function updateUserAuthById(id, data) {
    const userAuth = await UserAuth.findByIdAndUpdate(id, data, { new: true });
    return userAuth;
}

async function deleteUserAuthById(iz) {
    await UserAuth.findByIdAndDelete(id);
}

module.exports = {
    createUserAuth,
    getAllUserAuths,
    updateUserAuthById,
    deleteUserAuthById
};
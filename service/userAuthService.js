
const { Success } = require('../models/common/ResponseMessage');
const UserAuth = require('../models/UserAuth');

async function createUserAuth(data) {
    try {
        const user = new UserAuth(data);
        await user.save();
        return { Success: true, Message: "", Data: user };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
}

async function getAllUserAuths() {
    try {
        const users = await UserAuth.find();
        return { Success: true, Message: "", Data: users };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
}

async function updateUserAuthById(id, data) {
    try {
        const user = await UserAuth.findByIdAndUpdate(id, data, { new: true });
        return { Success: true, Message: "", Data: user };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
}

async function deleteUserAuthById(id) {
    try {   
        await UserAuth.findByIdAndDelete(id);
        return { Success: true, Message: "UserAuth deleted" };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
}

module.exports = {
    createUserAuth,
    getAllUserAuths,
    updateUserAuthById,
    deleteUserAuthById
};
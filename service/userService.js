const User = require('../models/User');

async function createUser(data) {
    try {
        const user = new User(data);
        await user.save();
        return { Success: true, Message: "", Data: user };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
}

async function getAllUsers() {
    try {
        const users = await User.find();
        return { Success: true, Message: "", Data: users };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
}

async function updateUserById(id, data) {
    try {
        const user = await User.findByIdAndUpdate(id, data, { new: true });
        return { Success: true, Message: "", Data: user };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
}

async function deleteUserById(id) {
    try {   
        await User.findByIdAndDelete(id);
        return { Success: true, Message: "User deleted" };
    } catch (error) {
        return { Success: false, Message: "An error occured", Data: error };
    }
}

module.exports = {
    createUser,
    getAllUsers,
    updateUserById,
    deleteUserById
};
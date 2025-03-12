const User = require('../models/User');

async function createUser(data) {
    try {
        const user = new User(data);
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
}

async function getAllUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
}

async function updateUserById(id, data) {
    try {
        const user = await User.findByIdAndUpdate(id, data, { new: true });
        return user;
    } catch (error) {
        throw error;
    }
}

async function deleteUserById(id) {
    try {   
        await User.findByIdAndDelete(id);
        return "User supprimé";
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getAllUsers,
    updateUserById,
    deleteUserById
};
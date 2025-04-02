const User = require('../models/User');

async function createUser(data) {
    const user = new User(data);
    await user.save();
    return user;
}

async function getAllUsers() {
    const users = await User.find();
    return users;
}

async function updateUserById(id, data) {
    const user = await User.findByIdAndUpdate(id, data, { new: true });
    return user;
}

async function getUserById(id) {
    const user = await User.findById(id);
    return user;
}

async function deleteUserById(id) {
    await User.findByIdAndDelete(id);
}

module.exports = {
    createUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById
};
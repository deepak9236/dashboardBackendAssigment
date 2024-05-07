import User from '../models/User.js';

const createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const newUser = new User({ username, password, role });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const assignRole = async (req, res) => {
    const { userId, databaseId, role } = req.body;

    try {
        // Check if the user making the request is an admin (you might implement this logic)
        // For simplicity, let's assume req.user.isAdmin is a boolean indicating admin status

        if (!req.user.isAdmin) {
            return res.status(403).json({ error: 'Unauthorized: Only admins can assign roles' });
        }

        // Update the user's role for the specified database
        await User.updateOne(
            { _id: userId, 'databases._id': databaseId },
            { $set: { 'databases.$.role': role } }
        );

        res.status(200).json({ message: 'Role assigned successfully' });
    } catch (error) {
        console.error('Error assigning role:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export { createUser, getUsers, deleteUser, assignRole };

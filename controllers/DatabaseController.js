import Database from '../models/Database.js'; // Import the Database model

export const addDatabase = async (req, res) => {
    try {
        const { name } = req.body;
        // console.log(name);
        const newDatabase = new Database({ name });
        await newDatabase.save();
        res.status(201).json({ message: 'Database added successfully', database: newDatabase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getDatabases = async (req, res) => {
    try {
        const databases = await Database.find();
        res.json(databases);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteDatabase = async (req, res) => {
    try {
        await Database.findByIdAndDelete(req.params.id);
        res.json({ message: 'Database deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

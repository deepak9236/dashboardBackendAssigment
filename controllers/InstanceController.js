import Instance from '../models/Instance.js';

const addInstance = async (req, res) => {
    try {
        const { name, host, port } = req.body;
        const newInstance = new Instance({ name, host, port });
        await newInstance.save();
        res.status(201).json({ message: 'Instance added successfully', instance: newInstance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getInstances = async (req, res) => {
    try {
        const instances = await Instance.find();
        res.json(instances);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { addInstance, getInstances };

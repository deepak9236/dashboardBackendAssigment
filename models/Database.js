import mongoose from 'mongoose';

const databaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Database = mongoose.model('Database', databaseSchema);

export default Database;

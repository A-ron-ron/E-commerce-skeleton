import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema(
  {
      Title: { type: String, required: true },
      Body: { Type: String, required: true }
  });

const aboutModel = mongoose.model('About', aboutSchema);

export default aboutModel;
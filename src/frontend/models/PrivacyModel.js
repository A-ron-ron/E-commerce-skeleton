import mongoose from 'mongoose';

const privacySchema = new mongoose.Schema(
  {
      Title: { type: String, required: true },
      Body: { Type: String, required: true }
  });

const privacyModel = mongoose.model('Privacy', privacySchema);

export default privacyModel;
import mongoose from 'mongoose';

const shipPolSchema = new mongoose.Schema(
  {
      Title: { type: String, required: true },
      Body: { Type: String, required: true }
  });

const shipPolModel = mongoose.model('ShipPol', shipPolSchema);

export default shipPolModel;
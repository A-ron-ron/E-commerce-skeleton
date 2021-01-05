import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema(
  {
      id: { type: Number, required: true},
      Header: { type: String, required: true },
      Body: { Type: String, required: true }
  });

const faqModel = mongoose.model('FAQ', faqSchema);

export default faqModel;
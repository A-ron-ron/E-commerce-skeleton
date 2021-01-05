import mongoose from 'mongoose';

const faveSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      ref: 'Product',
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const cartSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      ref: 'Product',
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const shippingSchema = {
  address: { type: String,  },
  city: { type: String,  },
  postCode: { type: String,  },
  country: { type: String,  },
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  cart: [cartSchema],
  faveList: [faveSchema],
  shipping: shippingSchema,
  OrderCur: [orderSchema],
  OrderHist: [orderHistSchema],
});

const userModel = mongoose.model('User', userSchema);

export default userModel;

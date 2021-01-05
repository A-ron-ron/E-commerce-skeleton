import mongoose from 'mongoose';


const paymentSchema = {
  paymentMethod: { type: String, required: true }
};

const orderItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  qty: { type: Number, required: true, default: 0 },
  category: { type: String, required: true }
});

const orderSchema = new mongoose.Schema({
  user: { type: Object, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  payment: paymentSchema,
  totalQty: { type: Number },
  productPrice: { type: Number },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  deliveryDate: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
}, {
  timestamps: true
});

const orderHistSchema = new mongoose.Schema({
  order: {orderSchema},
},
  {
    timestamps: true,
  }
)

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
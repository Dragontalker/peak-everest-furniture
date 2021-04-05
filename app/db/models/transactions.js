const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactions = new Schema({
   userId: { type: Schema.Types.ObjectId, required: true },
   productId: { type: Schema.Types.ObjectId, required: true },
   status: { type: String, required: true, trim: true }
}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('transactions', transactions)
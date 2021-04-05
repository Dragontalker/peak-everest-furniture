const mongoose = require('mongoose')
const Schema = mongoose.Schema

const products = new Schema({
   ownerId: Schema.Types.ObjectId,
   heading: { type: String, required: true, trim: true },
   description: String,
   image: [{ type: String }],
   price: Number,
   rating: Number,
   reviews: [] // { "name": "Fil", "rating": 4, "review": "Was awesome" },
}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('products', products)
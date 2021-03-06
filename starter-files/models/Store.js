const mongoose = require('mongoose');
const slug     = require ('slugs');

mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema({
  name: {
    type:     String,
    trim:     true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String]
});

storeSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = slug(this.name);
    // TODO: make more resiliant so slugs are unique
  }
  next();
});

module.exports = mongoose.model('Store', storeSchema);

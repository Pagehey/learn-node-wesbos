const mongoose = require('mongoose');
const Store    = mongoose.model('Store');
const params   = require('params');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.getStores = async (req, res) => {
  // 1. Query the database for all stores
  const stores = await Store.find();
  res.render('stores/index', { stores });
};

exports.newStore = (req, res) => {
  res.render('stores/new');
};

exports.createStore = async (req, res) => {
  const store = new Store(req.storeParams);
  await store.save();
  req.flash('success', `Successfully create ${store.name}!`);
  res.redirect(`/store/${store.slug}`);
};

exports.storeParams = (req, res, next) => {
  req.storeParams = params(req.body.store).only(['name', 'description', 'tags']);
  next();
};

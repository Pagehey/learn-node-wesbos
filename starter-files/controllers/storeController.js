const mongoose = require('mongoose');
const Store    = mongoose.model('Store');
const params   = require('params');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.newStore = (req, res) => {
  res.render('stores/new');
};

exports.createStore = async (req, res) => {
  const store = new Store(req.storeParams);
  await store.save();
  res.redirect('/');
};

exports.storeParams = (req, res, next) => {
  req.storeParams = params(req.body.store).only(['name', 'description', 'tags']);
  next();
};

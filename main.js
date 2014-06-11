/*
 Authenticates with Stripe and creates a customer
 @param params.email : the user account we're creating
 */
exports.stripe = function(params, cb) {
  var api_key = process.env.STRIPE_API_KEY; // secret stripe API key
  var stripe = require('stripe')(api_key);
  return stripe.customers.create({
    email: params.email
  }, cb);
};
FORMAT: 1A

# FeedHenry Stripe Connector

The FeedHenry Stripe Connector. For more information on Stripe see: [https://github.com/stripe/stripe-node](https://github.com/stripe/stripe-node).

# Group Stripe Connector API

# Stripe [/cloud/paypal]

Add customer

## Stripe [POST] 

Authenticates with Stripe and adds a customer

+ Request (application/json)
    + Body
        {
          "email": "customeremail@example.com"
        }

+ Response 200 (application/json)
    + Body
            {
              "ok": "true"
            }

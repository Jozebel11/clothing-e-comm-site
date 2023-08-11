const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    

    console.log(items.map(item => item.size), items.map(item => item.name))

    

    const transformedItems = items.map(item => ({
        quantity: 1,
        price_data: {
            currency: 'gbp',
            unit_amount: item.priced * 100,
            product_data: {
                name: String(item.name),
                description: String(item.size)
                
                
                
                
               
               

            },
        },
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_options: [
            {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {amount: 0, currency: 'gbp'},
                  display_name: 'Free Delivery',
                  delivery_estimate: {
                    minimum: {unit: 'business_day', value: 5},
                    maximum: {unit: 'business_day', value: 7},
                  },
                },
              },
              {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {amount: 599, currency: 'gbp'},
                  display_name: 'Next Day',
                  delivery_estimate: {
                    minimum: {unit: 'business_day', value: 1},
                    maximum: {unit: 'business_day', value: 2},
                  },
                },
              },
        ],
        shipping_address_collection:{
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url:  `${process.env.HOST}/checkout`,
        metadata: {
            email,
            name: String(items.map(item => item.name)),
            description: String(items.map(item => item.size))
            
            
            
        }
    })


  res.status(200).json({id: session.id})
};
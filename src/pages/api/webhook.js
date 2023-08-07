import { buffer } from 'micro';
import * as admin from 'firebase-admin';


//Secure a connection to firebase from the back-end

const serviceAccount = require("../../../permissions.json");

const app = !admin.apps.length
 ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
 : admin.app();

 //Establish connection to stripe

 const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

 const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

 if (typeof endpointSecret !== "string") {
    console.error("Unexpected value for STRIPE_SIGNING_SECRET");
    // potentially throw an error here
  }

 const fullfillOrder = async (session) => {
    console.log('fullfilling order', session)
    return app.firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id).set({
        name: session.metadata.name,
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping / 100,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log(`SUCCESS: Order ${session.id} had been added to the DB`)
    })
 }



export default async (req, res) => {
    if (req.method === 'POST'){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];

        let event;

        //Verify that EVENT posted came from stripe

        try{
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

        }catch(err){
            console.log('ERROR', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        if (event.type === 'checkout.session.completed'){
            const session = event.data.object;

            //Fullfill the order... 
            return fullfillOrder(session)
            .then(() => res.status(200))
            .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`))



        }


    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}


import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import NavigationDark from '../components/NavigationDark'
import moment from 'moment'
import db from '../../firebase'
import Order from '../components/Order'
import Footer from '../components/Footer'



function Orders({ orders }) {
    const session = useSession()
    console.log(orders)

    
  return (
    <div style={{minHeight:'100%'}}>
        <div
        style={{
            backgroundColor:'white',
            minHeight: '100px',
            
      
          }}
        
        >
            <NavigationDark/>
        </div>
        <main className='max-w-screen-lg mx-auto p-10 min-h-screen'>
            <h1 className='text-3xl border-b pb-4 uppercase'>
                Your Orders
            </h1>
            {session ? (
                <h2 className='text-xl uppercase text-gray-700'>{orders.length} Orders</h2>
            ) : (
                <h2>Please sign in to see your orders</h2>
            )}
            <div className='mt-5 space-y-4'> 
              {orders.map(({id, amount, amountShipping, items, timestamp, name}) => (
                <Order
                  key={id}
                  id={id}
                  amount={amount}
                  amountShipping={amountShipping}
                  items={items}
                  timestamp={timestamp}
                  name={name}
                  
                
                />
              ))}

            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    //get the user logged in credentials...
    const session = await getSession(context)

    if (!session) {
        return {
            props: {}
        }
    }

    const stripeOrders = await db.collection('users').doc(session.user.email).collection('orders').orderBy('timestamp', 'desc').get();

    // Stripe orders

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            name: String(order.data().name),
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
            session
        }
    }

}
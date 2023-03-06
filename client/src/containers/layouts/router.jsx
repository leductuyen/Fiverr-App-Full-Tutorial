import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Add from '../../pages/add/Add'
import Gig from '../../pages/gig/Gig'
import Gigs from '../../pages/gigs/Gigs'
import Home from '../../pages/Home/Home'
import Message from '../../pages/message/Message'
import Messages from '../../pages/messages/Messages'
import MyGigs from '../../pages/myGigs/MyGigs'
import Orders from '../../pages/orders/Orders'
import Layout from './Layout'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/gigs',
                    element: <Gigs />,
                },
                {
                    path: '/gig/:id',
                    element: <Gig />,
                },
                {
                    path: '/orders',
                    element: <Orders />,
                },
                {
                    path: '/mygigs',
                    element: <MyGigs />,
                },
                {
                    path: '/add',
                    element: <Add />,
                },
                {
                    path: '/messages',
                    element: <Messages />,
                },
                {
                    path: '/message/:id',
                    element: <Message />,
                },
            ],
        },
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router

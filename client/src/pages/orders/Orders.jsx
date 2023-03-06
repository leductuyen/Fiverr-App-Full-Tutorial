import React from 'react'
import { Link } from 'react-router-dom'
import './Orders.scss'
const Orders = () => {
    return (
        <div className="orders">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                    <Link to="/add">
                        <button>Add new Gig</button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Buyer</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img src="" alt="" />
                        </td>
                        <td>gig</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img
                                className="message"
                                src="./img/message.png"
                                alt=""
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Orders

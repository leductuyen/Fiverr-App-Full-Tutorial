import React from 'react'
import { Link } from 'react-router-dom'
import './MyGigs.scss'
const MyGigs = () => {
    return (
        <div className="myGigs">
            <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to="/add">
                        <button>Add new Gig</button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
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
                                className="delete"
                                src="./img/delete.png"
                                alt=""
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MyGigs

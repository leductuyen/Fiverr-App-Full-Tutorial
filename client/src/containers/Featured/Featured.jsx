import React, { useState } from 'react'
import './Featured.scss'
import { useNavigate } from 'react-router-dom'

function Featured() {
    //! State
    const [input, setInput] = useState('')
    console.log('input', input)
    //! Navigate
    const navigate = useNavigate()
    //! Function
    const handleOnchangeInput = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = () => {
        navigate(`/gigs?search=${input}`)
    }

    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>
                        Find the perfect <span>freelance</span> services for your
                        business
                    </h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input
                                type="text"
                                placeholder='Try "building mobil app"'
                                onChange={handleOnchangeInput}
                            />
                        </div>
                        <button onClick={handleSubmit}>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/mman.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured

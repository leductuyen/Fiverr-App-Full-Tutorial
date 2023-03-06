import React, { useState } from 'react'
import './Gigs.scss'
import { gigs } from '../../data'
import GigCard from '../../components/GigCard/GigCard'
const Gigs = () => {
    console.log(gigs)
    //! State
    const [openModal, setOpenModal] = useState(false)
    const [sort, setSort] = useState('Best Selling')

    //! Function
    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }
    const handleChangeRightMenu = () => {
        setSort(!sort)
        setOpenModal(false)
    }
    //! Return
    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">Liverr Graphics & Design </span>
                <h1>AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Fiverr is AI
                    artists
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budged</span>
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">SortBy</span>
                        <span className="sortType">
                            {sort ? 'Best Selling' : 'Newest'}
                        </span>

                        <img
                            src="./img/down.png"
                            alt=""
                            onClick={handleOpenModal}
                        />
                        {openModal && (
                            <div className="rightMenu">
                                {sort ? (
                                    <span onClick={handleChangeRightMenu}>
                                        Newest
                                    </span>
                                ) : (
                                    <span onClick={handleChangeRightMenu}>
                                        Best Selling
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {gigs.map((item) => (
                        <GigCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gigs

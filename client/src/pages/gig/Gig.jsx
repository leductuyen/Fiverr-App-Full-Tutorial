import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'
import './Gig.scss'

function Gig() {
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <span className="breadcrumbs">
                        Fiverr {'>'} Graphics & Design {'>'}
                    </span>
                    <h1>I will create ai generated art for you</h1>

                    <div className="user">
                        <img
                            className="pp"
                            src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <span>John Doe</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>

                    <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                        <img
                            src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                    </Slider>
                    <h2>About This Gig</h2>
                    <p>
                        I will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle I
                        will generate images with your prompts using ai dalle
                    </p>

                    <div className="seller">
                        <h2>About The Seller</h2>
                        <div className="user">
                            <img
                                src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="info">
                                <span>John Doe</span>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">USA</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member since</span>
                                    <span className="desc">Aug 2022</span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        Avg. response time
                                    </span>
                                    <span className="desc">4 hours</span>
                                </div>
                                <div className="item">
                                    <span className="title">Last delivery</span>
                                    <span className="desc">1 day</span>
                                </div>
                                <div className="item">
                                    <span className="title">Languages</span>
                                    <span className="desc">English</span>
                                </div>
                            </div>
                            <hr />
                            <p>
                                will generate images with your prompts using ai
                                dalle I will generate images with your prompts
                                using ai dalle I will generate images with your
                                prompts using ai dalle I will generate images with
                                your prompts using ai dalle I will generate images
                                with your prompts using ai dalle
                            </p>
                        </div>
                    </div>
                    <div className="reviews"></div>
                </div>

                <div className="right">
                    <div className="price">
                        <h3>data.shortTitle</h3>
                        <h2>$ data.price</h2>
                    </div>
                    <p>data.shortDesc</p>
                    <div className="details">
                        <div className="item">
                            <img src="/img/clock.png" alt="" />
                            <span>2 day</span>
                        </div>
                        <div className="item">
                            <img src="/img/recycle.png" alt="" />
                            <span>3 response</span>
                        </div>
                    </div>

                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Gig

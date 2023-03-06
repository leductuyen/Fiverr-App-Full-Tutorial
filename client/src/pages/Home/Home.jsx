import React from 'react'
import Slide from '../../components/slide/Slide'
import CatCard from '../../containers/catCard/CatCard'
import Explore from '../../containers/Explore/Explore'
import Featured from '../../containers/Featured/Featured'
import Features from '../../containers/Features/Features'
import ProjectCard from '../../containers/projectCard/ProjectCard'
import TrustedBy from '../../containers/TrustedBy/TrustedBy'
import { cards, projects } from '../../data'
import './Home.scss'
const Home = () => {
    return (
        <div>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Slide>
            <Features />
            <Explore />
            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map((card) => (
                    <ProjectCard key={card.id} card={card} />
                ))}
            </Slide>
        </div>
    )
}

export default Home

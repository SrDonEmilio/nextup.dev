import React from 'react'
import Project from '../components/Project'

import '../css/Portfolio.css'

import myFavorites_preview from '../img/projects-preview/myfavorite_preview.jpg'
import supercomputers from '../img/projects-preview/supercomputers.jpg'

const Portfolio = () => (
    <div id="portfolio">
        <h3>Projects</h3>
        <Project 
            name="nextmyfavorites"
            title="MyFavorites"
            description="Simple application to show my favorite movies and TV shows, getting the information from TheMovieDB API"
            preview={myFavorites_preview}
            link="https://myfavorites.nextup.dev"
        />
        <Project 
            name="supercomputers"
            title="Supercomputers"
            description="Ranking of the most powerful supercomputers in the World"
            preview={supercomputers}
            link="http://supercomputers.nextup.dev"
        />
    </div>
)

export default Portfolio
import React from 'react'
import Project from '../components/Project'

import '../css/Portfolio.css'

import myFavorites_preview from '../img/projects-preview/myfavorite_preview.jpg'

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
    </div>
)

export default Portfolio
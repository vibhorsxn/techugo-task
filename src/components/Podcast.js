import React from 'react'
import Row from './Row';
import '../style/Podcast.css'
function Podcast() {
    return (
        <div className="pod" style={{color:"white"}}>
            <h1 >Podcast</h1>
            <Row title="Trending Podcasts"/>
            <Row title="Trending in Business"/>            
            <Row title="Trending in News"/>           
        </div>
    )
}

export default Podcast

import React from 'react';
import Row from './Row';
import { Image } from 'react-bootstrap';

function Music(){
    return(
        <div style={{color:"white"}} className="App">
            {/* style={{background:"linear-gradient(#121212,grey)"}} */}
            <Row title="Trending Playlist"/>
            <Row title="Featured Podcast"/>
            <Row title="Featured This Week"/>
            <Image className="ads" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/music/merch/India/2021/Weekly/06_11/PODCOST_PC_Barker._CB665933229__UX1336_FMwebp_.jpg" bsPrefix />
            <Row title="Soul Soothers"/>
            <Row title="Top Stations"/>
        </div>
    )
}

export default Music;

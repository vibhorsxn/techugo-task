import React from 'react';
import { Image } from 'react-bootstrap';
import  '../style/Amazon-music.css';

function Row({ title }) {
    return (
        <div className="row">
            <h5>{title}</h5>

            <div className="row__posters">
                
                    <Image  className="row__poster" src="https://m.media-amazon.com/images/I/51HbxHB3E4L._UX250_FMwebp_QL85_.jpg" fluid />
                         
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/51OpUNK6-0S._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/41Mkhe7uOoL._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/41ixR8ZknKL._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/51N0BjC7vlS._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/51Q8HdcJMsL._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/51xt4+mOhkL._UX250_FMwebp_QL85_.jpg" fluid />
                  
                    <Image  className="row__poster" src="https://m.media-amazon.com/images/I/51HbxHB3E4L._UX250_FMwebp_QL85_.jpg" fluid />
               
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/51OpUNK6-0S._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/41Mkhe7uOoL._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/41ixR8ZknKL._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/51N0BjC7vlS._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/51Q8HdcJMsL._UX250_FMwebp_QL85_.jpg" fluid />
                
                
                    <Image className="row__poster" src="https://m.media-amazon.com/images/I/51xt4+mOhkL._UX250_FMwebp_QL85_.jpg" fluid />
                
            </div>
            
        </div>
        
    )
}

export default Row

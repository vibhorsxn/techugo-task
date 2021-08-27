import React, {useEffect,useState} from 'react';
import { Card,Button,Carousel } from 'react-bootstrap';

const Cast=()=>{

    const[users,setUsers]=useState([]);

    const getUsers=async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUsers(await response.json());
    }

    useEffect(()=>{
        getUsers();
    },[]);

    return(
        <div className="row"> 
          
        <h2 style={{color:"Black"}}>List of Cast</h2>
        
        {/* <div className="container-fluid mt-5">
            <div className="row text-center"> */}
                {
                    
                    users.map((curElem)=>{
                        return(
                          
                           
                            
<Card   style={{width:"20%", padding:"0.75", margin:"20px"}}>
  <Card.Img variant="top" src={curElem.thumbnailUrl } />
  <Card.Body>
    <Card.Title>{curElem.title }</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                     
                        )

                    })
                }
           
    </div>
        
    )
}

export default Cast;


 // <div className="d-flex align-items-center">
                            //             <div className="image"> <img alt="thumbnail" src={ curElem.thumbnailUrl } className="rounded" width="155" /> </div>
                            //         <div className="ml-3 w-100">
                            //                 <h4 className="mb-0 mt-0 textLeft text-warning">vibhor </h4>
                            //                  <span className="text-left text-white bg-dark">{curElem.title }</span> 
                            //             <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            //                     <div className="d-flex flex-column">
                            //                         <span className="articles">Articles</span> <span className="number1">38</span>
                            //                     </div>
                            //                     <div className="d-flex flex-column">
                            //                         <span className="followers">Followers</span> <span className="number2">980</span>
                            //                     </div>
                            //                     <div className="d-flex flex-column">
                            //                         <span className="rating">Rating</span> <span className="number3">8.9</span> 
                            //                     </div>
                            //             </div>
                                      
                            //         </div>
                            //  </div>

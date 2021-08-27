//import react from 'React';
import {Pagination} from 'react-bootstrap';

function Pages(){
    return(
        <>
        <Pagination className="page">
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item active>{1}</Pagination.Item>
  {/* <Pagination.Ellipsis /> */}

  <Pagination.Item>{5}</Pagination.Item>
  

  <Pagination.Ellipsis />
 
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
        
        </>
    )
}

export default Pages;
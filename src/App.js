import './style/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Pages from './components/Pagination';

function App() {
  
  return (
    
    
    <div  className="App">
      {/* style={{backgroundColor:" #121212"}} */}
     <Navbar/> 
     {/* <Cards />    */}
     {/* <Pages/>      */}
     <Footer/>
    </div>
  );
}

export default App;
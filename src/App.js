// import logo from './logo.svg';
import Routers from './Routers';
import Header from './Components/navbar';
import Footer from './Components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routers/>
       <Footer/>
    </div>
  );
}

export default App;

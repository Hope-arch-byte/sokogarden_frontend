import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import Mpesa from './components/Mpesa';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 className='text-success'>Sokogarden-Buy and sell online</h1>
      </header>

      <nav>
      <Link to='/signup' className='btn bg-dark text-white m-3'>Sign Up</Link>
      <Link to='/signin' className='btn bg-dark text-white m-3'>Sign In</Link>      
      <Link to='/' className='btn bg-dark text-white m-3'>Get Products</Link>
      <Link to='/addproducts' className='btn bg-dark text-white m-3'>Add Products</Link>      
      </nav>
      

      {/* <AddProducts/>
      <GetProducts/>
      <Mpesa/>
      <SignIn/>
      <SignUp/> */}

      <Routes>
        <Route path="/addproducts" element={<AddProducts/>}/>
        <Route path="/" element={<GetProducts/>}/>
        <Route path="/mpesa" element={<Mpesa/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import SignUP from './Pages/Contact/SignUP/SignUP';
import Login from './Pages/Contact/Login/Login';
import Footer from './Pages/Footer/Footer';
import Descbox from './Pages/Home/Descbox/Descbox';
import NotFound from './Pages/NonFound/NotFound';
import Booking from './Pages/Booking/Booking';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:serviceid' element={<Descbox></Descbox>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/booking' element={
          <RequireAuth>
            <Booking></Booking>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;

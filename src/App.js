import { Route, Routes,Navigate,useLocation } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';
function App() {
  
  return (
      <Routes>

           <Route path='/' element={<RequiredAuth><Home/></RequiredAuth>  }></Route>


           <Route path='/register' element={ <ProtecttedIfAuth><Register/></ProtecttedIfAuth>  } ></Route> 
           <Route path='/login' element={<ProtecttedIfAuth><Login /></ProtecttedIfAuth>}></Route>

           <Route path='/movies' element={<RequiredAuth><Home type='movie' /></RequiredAuth>}></Route>
           <Route path='/series' element={<RequiredAuth><Home type='series' /></RequiredAuth>}></Route>
           <Route path='/watch' element={<RequiredAuth><Watch /></RequiredAuth>}></Route>
      </Routes>
  );
}


export default App;
  

const RequiredAuth = ({ children }) => {
   const {user}= useContext(AuthContext);
  const location = useLocation();
  const  currentUser  = user
  if (!currentUser) {
    
    return <Navigate to="/register" state={{ path: location.pathname }} />;
  }
  return children;
};

const ProtecttedIfAuth = ({ children }) => {
  const {user}= useContext(AuthContext);
  const location = useLocation();
  const  currentUser  = user;
 
  if (currentUser) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return children;
};

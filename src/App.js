// import logo from './logo.svg';
import './App.css';
// import FormFloatingBasicExample from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import AddNewBlog from './components/NewBlog/NewBlog'
import HomeData from './components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<HomeData />} />
        <Route path='/addnew' element={<AddNewBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import UserProfilePage from './components/UserProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/userprofile' element={<UserProfilePage/>} />
      </Routes>
    </div>
  );
}

export default App;
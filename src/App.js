import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
export const url='http://localhost:8000'
function App() {
  return <>
 <BrowserRouter>
 <Routes>
  <Route path='/login' element={<Login/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='*' element={<Navigate to='/login'/>}/>
 </Routes>
 </BrowserRouter>
  </>
}

export default App;

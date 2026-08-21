import { Navigate, Route, Routes } from 'react-router'
import './App.css';
import HomeNav from './Components/navbars/HomeNav';
import HomePage from './Components/pages/HomePage';
import CreatePage from './Components/pages/CreatePage';
import UpdatePage from './Components/pages/UpdatePage';
import LoginPage from './Components/Auth/LoginPage';
import ProtectedRoute from './Components/HOC/ProtectedRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeNav />}>
          <Route index element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/update/:rollno' element={<UpdatePage />} />
           <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { Logout } from './Pages/Logout';
import Navbar from './Components/Navbar';
import Error from './Pages/Error';
import AdminLayout from './Components/Layouts/Admin-Layout';
import AdminContacts from './Pages/AdminContacts';
import AdminUsers from './Pages/AdminUsers';
import AdminUpdate from './Pages/AdminUpdate';
import ProtectedRoute from './Components/ProtectedRoute';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={
            <ProtectedRoute>
               <About />
            </ProtectedRoute>
         
          } />
        <Route path='/register' element={ <Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Error />} />

        {/* Protected Routes */}
        <Route
          path='/contact'
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path='/service'
          element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path='users' element={<AdminUsers />} />
          <Route path='contacts' element={<AdminContacts />} />
          <Route path='users/:id/edit' element={<AdminUpdate />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

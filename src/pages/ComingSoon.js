import React from 'react';
import Hero from '../components/Hero';
import PaymentMethod from '../components/PaymentMethod';
import Soon from '../components/Soon';
import Footer from '../components/Footer';
import Pay from '../components/Pay';
import Loan from '../components/Loan';
import Groups from '../components/Groups';
import Savings from '../components/Savings';
import { Routes, Route } from 'react-router-dom';


const ComingSoon = () => {
  return (
    <div>
      <Hero/>
      <PaymentMethod/>
      <Routes>
        <Route path='/' element={<Pay/>}/>
        <Route path='/groups' element={<Groups/>}/>
        <Route path='/savings' element={<Savings/>}/>
        <Route path='/loan' element={<Loan/>}/>
      </Routes>
      <Soon/>
      <Footer/>
    </div>
  )
}

export default ComingSoon;
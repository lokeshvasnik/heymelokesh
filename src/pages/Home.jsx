import React from 'react';
import Nav from '../components/Navbar/Nav';
import Header from '../components/Header/Header';
import Quote from '../components/Quotes/Quote';
import Cursor from '../Cursor';

const Home = () => {
  return (
    <>
    <Cursor/>
      <Nav />
      <Header />
      <Quote/>
    </>
  );
};

export default Home;

import React, { useEffect } from 'react';
import Header from './components/Header';
import TopPattern from './components/TopPattern';
import Content from './components/Content';
import Rules from './components/Rules';
import Footer from './components/Footer';

import "aos/dist/aos.css";

import AOS from "aos";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <TopPattern />
      <Header />
      <Content />
      <Rules />
      <Footer />
    </>
  );
}

export default App;

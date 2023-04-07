import React from 'react';
import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Works from "./components/Works/Works.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App(props) {
  return (
    <>
    <Header/>
    <main>
      <Hero/>    
      <Posts/>
      <Works/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
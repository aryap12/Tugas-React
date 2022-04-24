import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/home';
import { Navbar_Obj } from '../utils/constans';
const HomePaging = () => {
  const navbar = Navbar_Obj;
  return (
    <div className='App'>
      <header className='App-header'>
        {navbar.map((nav)=>{
          return  <Navbar key={nav.id} nav={nav}/>
        })}
        <br/>
        <br/>
        <br/>
        <h1>This is home page</h1>
      </header>
      <main>
        <section className='products'>
          <ErrorBoundary></ErrorBoundary>
        </section>
        <footer></footer>
      </main>
    </div>
  );
};

export default HomePaging;

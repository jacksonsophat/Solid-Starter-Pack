import type { Component } from 'solid-js';
import { Routes, Route, A, useRoutes } from "@solidjs/router"
import { Suspense } from 'solid-js';
import { lazy } from 'solid-js';
import { MyRoutes } from './components/Routes'

// Components
const Footer = lazy(() => import('./components/Footer'))
const Header = lazy(() => import('./components/Header'))
// const routes

// pages
const Home = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))

const App: Component = () => {

  return (
    <main>
      {/* <Header /> */}
      {/* <Routes /> */}
      <div id='page-content'>
        <MyRoutes />
      </div>

      {/* <Footer /> */}
    </main>
  );
};

export default App;

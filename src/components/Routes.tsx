import { lazy } from 'solid-js'
import { render } from "solid-js/web";
import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router'

// import Home from '../pages/Home'


const Home = lazy(() => import('../pages/Home'))
const AboutUs = lazy(() => import('../pages/AboutUs'))
// About

export const MyRoutes = () => {
    return <>
        <Routes>
            <Route path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
        </Routes>


    </>
}

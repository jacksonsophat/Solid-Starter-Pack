import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const Header = () => {
    return <header>
        <nav>
            <A href="/">Home</A>
            <A href="/about-us">About Us</A>
        </nav>

    </header>
}

export default Header;
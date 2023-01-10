import type { Component } from 'solid-js';
import "../assets/styles/scss/homepage.scss"

const Home = () => {
    return <>
        <div class='hero-section'>
            <div class='h-screen flex justify-center items-center relative'>
                <div class='text-primary text-center p-5 md:px-20 md:py-10 rounded bg-white/75 relative'>
                    <h1 class='text-4xl md:text-5xl font-bold pb-4 '>Anna & Associates</h1>
                    <h2 class='text-lg md:text-3xl font-semibold'>Your Gateway to Cambodia through Cambodian laws experts</h2>
                </div>
                <div class="hero-services-icons">
                    {/* Left */}
                    <a href="#" class='absolute top-1/4 left-0 bg-primary text-white px-4 py-3 rounded'>
                        Services <i class="fa-solid fa-gears pl-2"></i>
                    </a>
                    <a href="#" class='absolute top-3/4 left-0 bg-primary text-white px-4 py-3 rounded'>
                        Partners <i class="fa-solid fa-handshake pl-2"></i>
                    </a>
                    {/* Right */}
                    <a href="#" class='absolute top-1/4 right-0 bg-primary text-white px-4 py-3 rounded'>
                        <i class="fa-solid fa-book mr-2"></i>Publications
                    </a>
                    <a href="#" class='absolute top-3/4 right-0 bg-primary text-white px-4 py-3 rounded'>
                        <i class="fa-solid fa-phone pr-2"></i>Contact
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Home;
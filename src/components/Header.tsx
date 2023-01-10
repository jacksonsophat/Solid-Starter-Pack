import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import logo from '../assets/images/anna-logo-blue.png';

const Header = () => {
    return <header>
        <div class='bg-primary py-2 px-1 flex justify-between md:p-4'>
            <div class='text-white'>
                <a href="https://www.facebook.com/annaassociatess" target='_blank' class='mr-2'>
                    <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/anna-associates/" target='_blank' class='mr-2'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:info@anna-associates.com" target='_blank' class='mr-2'>
                    <i class="fa-solid fa-envelope"></i>
                </a>
            </div>
            <div class='text-white'>
                <small class='mr-2'>Email: info@anna-associates.com</small>
                <a href="tel:+12273012">
                    <small class='border rounded px-2 py-1'>
                        <i class="fa-solid fa-phone-arrow-right"></i> +12 273 012</small>
                </a>
            </div>
        </div>


        <nav class='p-4 flex justify-between items-center'>
            <div>
                <img src={logo} alt="" class='w-20 md:w-32' />
            </div>
            <div class='font-medium text-primary'>
                <A href="/" class='mr-3'>Home</A>
                <A href="/about-us">About Us</A>
            </div>
        </nav>

    </header >
}

export default Header;
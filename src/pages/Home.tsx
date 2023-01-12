import { Component, createSignal } from 'solid-js';
import "../assets/styles/scss/homepage.scss"

const Home = () => {

    const [count, setCount] = createSignal(0);

    return <>
        <div class='mt-10 ml-10'>
            <h1>Homepage</h1>

            <hr />
            <div class='mt-5'>
                <div>Count: {count()}</div>
            </div>
        </div>
    </>
}

export default Home;
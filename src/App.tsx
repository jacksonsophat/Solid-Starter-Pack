import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline bg-purple-50 py-5">
        This is the setup for Solid with styles:
      </h1>
      <div class="my-4">
        <h2 class='my-2 font-bold'>Tailwind css</h2>
        {/* <p class='my-2'>Tailwind css</p> */}
      </div>
    </div>
  );
};

export default App;

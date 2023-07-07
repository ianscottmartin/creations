import React from "react";
import Home from "./Home";

import About from "./About";
import EmojiButton from "./EmojiButton";
import Card from "./Card";
import Header from "./Header";
// import ReactDOM from 'react-dom';








// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <About />
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <Header />
      <main>
        <Card title="Welcome to ComicLand!">
          <em>Find your Hero</em>
        </Card>
        <Card title="What Icons would you like to see?">
          <div>
            <EmojiButton emoji="💀" label="Heros" />
            <EmojiButton emoji="💀" label="Villians" />
          </div>
          <div>

            <Home />
            <About />
          </div>
        </Card>
      </main>
    </div>
  );
}


export default App

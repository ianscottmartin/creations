import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import EmojiButtonButton from "./EmojiButton";
import Card from "./Card";
import Header from "./Header";
import ReactDOM from 'react-dom';








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
        <Card title="Welcome to PetLand!">
          <em>Find your dream pet</em>
        </Card>
        <Card title="What pets would you like to see?">
          <div>
            <EmojiButton emoji="😸" label="Cats" />
            <EmojiButton emoji="🐕" label="Dogs" />
          </div>
        </Card>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App

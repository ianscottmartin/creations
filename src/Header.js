import { ReactDOM } from "react";
import PushButton from "./EmojiButton";



function Header() {
    return (
        <header>
            <h1>PetLand</h1>
            <nav>
                <EmojiButton emoji="💀" label="Login" />
            </nav>
        </header>
    )
}


export default Header
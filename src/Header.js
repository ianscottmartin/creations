import React from "react";
import EmojiButton from "./EmojiButton";



function Header() {
    return (
        <header>
            <h1>ComicLand</h1>
            <nav>
                <EmojiButton emoji="💀" label="Login" />
            </nav>
        </header>
    )
}


export default Header
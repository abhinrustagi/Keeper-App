import React from "react";

import Input from "./input";

function LoginBox() {
    return <div>
        <h1>Login</h1>
        <form>
            <div>
                <label for="name">Your username</label>
                <input type="text" id="name"></input>
            </div>
        </form>
    </div>
}
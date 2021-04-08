import React from "react";

const App = () => {
    return(
    <div>
        <Header />
        <Content />
    </div>
    )
}
const Header = ()=> {
    return(
    <div>
        <h1>Header</h1>
    </div>
    )
}

const Content = () =>{
    return(
    <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
    </div>
    )
}

export default App;
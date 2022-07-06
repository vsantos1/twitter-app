import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export default createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
    text-decoration:none;
    list-style: none;
}

html,body, #root{
    max-width: 100vw;
    max-height: 100vh;
    width:100%;
    height:100%;
}
*,button, input{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Ubuntu', 'Helvetica Neue',
    sans-serif;
    border:0;
    background: none;
}

html{
    background-color: var(--primary);

}

:root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
    --second: #71767b;
    
  }

`;

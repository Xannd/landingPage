import { createGlobalStyle } from  'styled-components'
import BKG1 from '../assets/images/bkg1.svg'
import BKG2 from '../assets/images/bkg2.svg'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height:100%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: url(${BKG2}) no-repeat 100%,url(${BKG1}) no-repeat 105%;
        background-repeat: no-repeat;
        background-color: #F8FDFF;
    }

    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`

export default GlobalStyle;
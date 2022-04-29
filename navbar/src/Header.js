import React from 'react'
import './styles.css'

const Header = () => (
    <header>
        <ul>
            <li><a className="active react" href="/react-app">React</a></li>
            <li><a className="vue" href="/vue-app">Vue</a></li>
            <li><a className="angular" href="/angular-app">Angular</a></li>
        </ul>
    </header>
)

export default Header
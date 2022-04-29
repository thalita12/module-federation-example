import React, { useState } from 'react'
import './styles.css'

const Header = () => {
    const [activeItem, setActiveItem] = useState('react')

    const handleClick = (id) => {
        setActiveItem(id)
    }

    return (
        <header>
            <ul>
                <li><a className={activeItem === 'react' ? 'active react' : '' } href="/react-app" onClick={() => handleClick('react')}>React</a></li>
                <li><a className={activeItem === 'vue' ? 'active vue' : '' } href="/vue-app" onClick={() => handleClick('vue')}>Vue</a></li>
                <li><a className={activeItem === 'angular' ? 'active angular' : '' } href="/angular-app" onClick={() => handleClick('angular')}>Angular</a></li>
            </ul>
        </header>
    )
}

export default Header
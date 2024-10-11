import React from 'react'
import headerLogo from "../Assets/img/logo.png"

function Header() {
  return (
    <header>
        <img src={headerLogo} alt='breaking bad logo'/>
    </header>
  )
}

export default Header
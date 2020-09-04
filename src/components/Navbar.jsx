import React from 'react'
import NavbarBrand from './NavbarBrand'
import Button from './Button'
import Div from './Div'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavbarBrand />
            <Button />
            <Div />
        </nav>
    )
}

export default Navbar
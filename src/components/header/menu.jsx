import React from 'react'
import "../../styles/header/menu.scss"

function menu() {
  return (
    <div>
        <header className="header">
            <div className="container">
                <div className="btn-menu">
                    <label htmlFor="btn-menu">☰</label>
                </div>
                <nav className="menu">
                    <a href="#" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default menu;
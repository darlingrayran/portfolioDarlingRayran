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
            </div>
        </header>
    </div>
  )
}

export default menu;
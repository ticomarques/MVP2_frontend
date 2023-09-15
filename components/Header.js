import React from 'react'

function Header({categories}) {
    return (
    <div className="header">
        <header>
            <div className="header-top">
              <h1>Logo</h1>
            </div>

            <div className="header-sub">
              <div className="menu">
                {
                  categories.map(item => (
                    <button key={item.id}>{item.name}</button>
                  ))
                }
              </div>

            </div>
        </header>
    </div>
  )
}

export default Header
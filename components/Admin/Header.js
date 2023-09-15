import Link from 'next/link'
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

                    <Link href="/admin/cupom">Cupom</Link>
                    <Link href="/admin/frete">Frete</Link>

              </div>

            </div>
        </header>
    </div>
  )
}

export default Header
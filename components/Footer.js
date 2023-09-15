import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <Link href="/">Loja</Link>
      <Link href="/admin">Admin</Link>
    </div>
  )
}

export default Footer
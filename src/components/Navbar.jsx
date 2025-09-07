import React from 'react'

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>Chi siamo</Link>
      <Link to="/products" style={{ margin: '0 10px' }}>Prodotti</Link>
    </nav>
  )
}

export default Navbar

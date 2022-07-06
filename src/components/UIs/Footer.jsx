import React from 'react'

function Footer() {

  const date = new Date()
  const year = date.getFullYear()
  return (
    <div>
      <p>Copyrigth © {year} </p>
    </div>
  )
}

export default Footer;
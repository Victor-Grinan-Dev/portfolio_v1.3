import React from 'react'

function Conctact({id, name, url}) {
  return (
    <div>
        <a href={url} target="blank">
            <img src="icons/github_circle_white_border.com.png" alt={name} class="some" />
        </a>
    </div>
  )
}

export default Conctact
import React from 'react'

const References = ({ refs }) => {
  return (
    <ul className='flex items-center justify-center gap-4 flex-wrap'>
      {
        refs.map((ref, index) => (
          <li key={index + 1}>
            <a href="https://www.google.com" className="link link-info flex items-center" target='_blank'>
              {ref}
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default References
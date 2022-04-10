import React from 'react'
import {Link} from 'react-router-dom'
import {BsFillCloudArrowUpFill} from 'react-icons/bs'
function Header() {
  return (
    <header className='header'>
      <section className="container">
        <h1>TikTok</h1> 
        <div className="user-utils">
          <Link to={'/upload'}>
            <BsFillCloudArrowUpFill />
          </Link>
          <div className="user-prof">
            <img src="https://i.imgur.com/8OwBnab.png" alt="myprof" />
          </div>
        </div>  
      </section>
    </header>
  )
}

export default Header
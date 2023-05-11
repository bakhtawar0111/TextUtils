import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top`} style={{backgroundColor:`${props.mode}`}}>
  <div className={`container-fluid`}>
    <a className={`navbar-brand text-${props.mode==='white'?'black':'white'}`} href="#">{props.title}</a>
    <button className={`navbar-toggler bg-${props.mode==='dark'?'white':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='white'?'black':'white'}`} aria-current="page" href="#">Home</a>
        </li>
        {/*<li className="nav-item">
          <a className={`nav-a active text-${props.mode==='white'?'black':'white'}`} href="#">{props.option1}</a>
        </li>*/}
      </ul>
      <label className={`form-check-label text-${props.mode==='white'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">Themes</label>
      <button onClick={()=>props.HandleMode('dark')} className='btn btn mx-2' style={{backgroundColor:`${props.mode==='black'?'white':'black'}`,color:`${props.mode==='black'?'white':'black'}`}}>Bl</button>
      <button onClick={()=>props.HandleMode('#34282C')} className='btn btn mx-2' style={{backgroundColor:`${props.mode==='#34282C'?'white':'#34282C'}`,color:`${props.mode==='#34282C'?'white':'#34282C'}`}}>Bl</button>
      <button onClick={()=>props.HandleMode('#2B3856')} className='btn btn mx-2' style={{backgroundColor:`${props.mode==='#2B3856'?'white':'#2B3856'}`,color:`${props.mode==='#2B3856'?'white':'#2B3856'}`}}>Bl</button>
      {/*<div className="form-check form-switch">
    <input onClick={()=>props.HandleMode('dark')} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className={`form-check-label text-${props.mode==='white'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
    </div>*/}
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>*/}
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string
}
Navbar.defaultProps={
    title:"Add Title Here"
} 
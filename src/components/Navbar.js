import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

const[query, setQuery] = useState("")

 const handleOnChange = (event) =>{
  setQuery(event.target.value);
  }

 const sendValue = () => {
    props.sendDataToApp(query);
  };

  const removeQuery = () =>{
    props.setQuery("");
  }

 const handleSubmit= (event) => {
    event.preventDefault();
  }

  return (
      <>
<nav className="navbar sticky-top navbar-expand-lg mt-0 bg-body-tertiary" data-bs-theme="dark" style={{zIndex : 20}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">KHABAR</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" onClick={removeQuery}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment" onClick={removeQuery}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business" onClick={removeQuery}>Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports" onClick={removeQuery}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health" onClick={removeQuery}>Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science" onClick={removeQuery}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general" onClick={removeQuery}>General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology" onClick={removeQuery}>Technology</Link>
        </li>
      </ul>
      <form className="d-flex " role="search" onSubmit={handleSubmit} autoComplete="off">
        <input className="form-control me-2" type="search" value={query} onChange={handleOnChange} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={sendValue} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
}

export default Navbar;
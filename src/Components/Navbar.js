import React from 'react'
import back from "../Assets/p1.jpeg"
import './nav.css';
import logo1 from '../Assets/logo1.png'
const Navbar = () => {
  return (
    <>
        
<div className='hey'>
  <header className='hed '  style={{backgroundImage:`url(${back})`,backgroundSize:"cover"}}>
  <div className='clone pt-5'  >
  <nav className="my-nav navbar navbar-primary bg-light navbar-expand-lg p-2" style={{boxShadow:" 0 0 20px #262626"}}>
      <div className="container ">


      <a className="navbar-brand  " to="/"><img src={logo1} alt='loading' style={{width:"150px",}}/></a>
      <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">About</a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Olympiad
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" to="/hindi">Hindi Olympiad</a></li>
            <li><a class="dropdown-item" to="/commerce">Commerce Olympiad</a></li>
            <li><a class="dropdown-item" to="/science">Science Olympiad</a></li>
            <li><a class="dropdown-item" to="/english">English Olympiad</a></li>
            <li><a class="dropdown-item" to="/math">Mathematics Olympiad</a></li>
            <li><a class="dropdown-item" to="scouts">Scouts & Guide Olympiad</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Co-ordinator
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">North Zone</a></li>
            <li><a class="dropdown-item" href="#">East Zone</a></li>
            <li><a class="dropdown-item" href="#">West Zone</a></li>
            <li><a class="dropdown-item" href="#">South Zone</a></li>
            <li><a class="dropdown-item" href="#">Central Zone</a></li>
            <li><a class="dropdown-item" href="#">North East Zone</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gallery
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Photo Gallery</a></li>
            <li><a class="dropdown-item" href="#">Video Gallery</a></li>
           
            </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Student</a></li>
            <li><a class="dropdown-item" href="#">School</a></li>
            <li><a class="dropdown-item" href="#">Admin</a></li>
            <li><a class="dropdown-item" href="#">Co-ordinator</a></li>
           
            </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">School</a></li>
            <li><a class="dropdown-item" href="#">Individal Student</a></li>
            <li><a class="dropdown-item" href="#">School Student</a></li>
            
            </ul>
        </li>
        <li className="nav-item active">
            <a className="nav-link " href="#">Contact Us  <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        
      </div>
  </div>
    </nav>
    <div className='head text-center'>
      <h1 style={{fontFamily:'Prata'}}>Get Your <span style={{color:"yellow"}}>Education</span>  Today!</h1>
    </div>
 
    


<div className='mint' id='cool'>
<div className='row'>
  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4" >
  <div class="card mb-3 bg-dark" id="view" style={{maxWidth: "300px"}}>
        <div class="card-body text-center">
        <i class='fas fa-users' style={{fontSize: "56px",color:"#8695B0"}}></i><h5 class="card-title text-muted">Our Mission</h5>
        <p class="card-text text-muted">View More</p>
      </div>
    </div>
  </div>
  


<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
  <div class="card  bg-dark" id="view" style={{maxWidth: "300px"}}>
        <div class="card-body text-center">
        
<i class="fa fa-globe text-muted" style={{fontSize:"56px",}}></i><h5 class="card-title text-muted">Our Branches</h5>
        <p class="card-text text-muted">View More</p>
      </div>
    </div>
  </div>
  


<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
  <div class="card mb-3 bg-dark" id="view" style={{maxWidth: "300px"}}>
  <div class="card-body text-center">
  <i class="fa fa-trophy text-muted" style={{fontSize:"56px"}}></i><h5 class="card-title text-muted">Our Acheivements</h5>
        <p class="card-text text-muted">View More</p>
      </div>
    </div>
  </div>
  </div>
</div>


</div>

    </header>
</div>


    </>
  )
}

export default Navbar
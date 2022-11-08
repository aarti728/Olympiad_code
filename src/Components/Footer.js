import React from 'react';
import icon from "../Assets/icons.jpg";

const Footer = () => {
  return (
    <>
    
<div className="container-fluid bg-dark text-muted p-5 ">
<div className='contain' >
<div className="row">
<hr />
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
    <div className='yup p-4 text-left'>
<h5 className="text-light">Olympiad Foundation</h5>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius obcaecati quo ea repudiandae officiis, provident expedita voluptate adipisci! Qui nobis voluptatibus officiis recusandae ea, minus laboriosam assumenda obcaecati perspiciatis et voluptates incidunt sunt fuga voluptatum </p>


</div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    <div className='yup p-4 '>
<h5 className="text-light">Menu</h5>
<p>Home</p>
<p>About</p>
<p>Olympiad</p>
<p>Co-ordinator</p>
<p>gallery</p>

    </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    <div className='yup p-4'>
<h5 className="text-light">Usefull Links</h5>
<p>Privacy Policy</p>
<p>Refund Policy</p>
<p>Terms & Conditions</p>
<p>FAQ</p>


</div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6  ">
    <div className='yup p-4 '>
<h5 className="text-light">Contact Us</h5>
<p><i class="fa fa-map-marker fs-4" aria-hidden="true" ></i> &nbsp; 123 world Center,Faridabad,India</p>
<p><i class="fa fa-phone fs-4    " aria-hidden="true"></i> &nbsp; 0123-4598367</p>
<p><i class="fa fa-envelope fs-4" aria-hidden="true"></i> &nbsp; info@gmail.com</p>


    </div>
    </div>
</div>
   </div>
   <hr />

 

<div className="main  ">
<div className="row mx-3">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
    <p>Copyright &copy;2022 All Right Reserved</p>

    
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6" >
    
    <div className='align text-center'>
    {/* <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-google"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-youtube"></a> */}
{/* <img src={icon} alt="" /> */}


</div>
  


    </div>
    </div>
</div>

</div> 

    </>
  )
}

export default Footer;
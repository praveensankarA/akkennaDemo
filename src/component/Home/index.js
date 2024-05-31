import {Component} from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"

import "./index.css"

class Home extends Component{
    state={menubar:false}

    menuBarOpenClose=()=>{
        const {menubar}=this.state
        this.setState({menubar:!menubar})
    }

    render(){
    const {menubar}=this.state
    return(
        <div className="home-container">
        <Navbar/>
        <div className="body-container">
            {/* mobile-menu --start*/}
        <div className={menubar?"menu-bar-open":"a"}>
            <ul className="mb-nav-items-container">
               <li><a className="mb-nav-items" herf="#"> Home</a></li>
               <li><a className="mb-nav-items" herf="#"> About Us</a></li>
               <li><a className="mb-nav-items" herf="#"> Products</a></li>
               <li><a className="mb-nav-items" herf="#"> Serviece</a></li>
               <li><a className="mb-nav-items" herf="#"> Blogs</a></li>
               <li><a className="mb-nav-items" herf="#"> Careers</a></li>
            </ul>
            <button className="mb-nav-contact-btn" >Contact</button>
            
        </div>
        {/* mobile-menu --end*/}
            
        {/* banner-container-start */}
        <div className="banner-main-container">
            <img src="https://i.ibb.co/61jzWnp/Element.png" alt="banner image" className="banner-img"/>
            <h6>Akkenna</h6>
            <h1>Making Waves With Generative AI Services</h1>
            <p>In artificial intelligence, there are limitless opportunities for innovation, efficiency, and
            greatness to be redefined.Your path to a new direction starts here.</p>

            <button className="banner-btn">Let's Contact</button>
        </div>

        {/* banner-container-stop */}
        </div>
        


        <Footer menuBarOpenClose={this.menuBarOpenClose} menubar={menubar}/>
        </div>
)}};

export default Home
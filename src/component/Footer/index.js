import "./index.css"

const Footer=(props)=>{
    const {menuBarOpenClose,menubar}=props
    return(
    <div className="footer-container">
       <img onClick={menuBarOpenClose}  src="https://www.akkenna.com/static/media/menu.72cad07e683b16e056d57072d5d20ccd.svg"
       alt="features" className={`footer-items ${menubar&&"mb-nav-btn"}`}/>
       <img src="https://www.akkenna.com/static/media/call.595e61b50fad0f21f0116c3f81edaa85.svg" alt="" className="footer-items"/>
       <img src="https://www.akkenna.com/static/media/bot.27b17eb0663c6f7e4479c008832b39f4.svg" alt="" className="footer-items"/>
       <img src="https://www.akkenna.com/static/media/whatsapp.ac1d77d130e13943208d00d996c3815a.svg" alt="" className="footer-items"/>
    </div>)

}

export default Footer
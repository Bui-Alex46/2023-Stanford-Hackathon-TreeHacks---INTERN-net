import react  from 'react';
import logo from './projectLogo.svg';
import './HeaderStyle.css'; 


function Header(){
    return(
        <div className = "header">
            <img className = "logo" src = {logo}/>
            <div>HOME</div>
            <div>TRACKED APPS</div>
        </div>
    )
}

export default Header;
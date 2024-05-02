import './Nav.css';
import topNews from '../images/logo-top-news-stories-today.png';
import { NavLink } from 'react-router-dom';

function Nav() {

    return (

        <header className='header'>
            <img src={topNews} alt='Top News Stories Text' className='top-news-img'/>
            <NavLink to='/' className='home-btn'>Home</NavLink>
        </header>
    )
}

export default Nav;
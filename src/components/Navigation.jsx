import { Link, useLocation } from 'react-router-dom';

// import '../App.css'

function Navigation () {
    const currentPage = useLocation().pathname;

    return (
        <nav className="main-nav">
            <ul className="main-links">
                <li>
                    <Link to='/' className='main-button'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' className='main-button'>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className='main-button'>
                        Contact
                    </Link>
                </li>
                <li>
                    <a href="#projects-anchor"><button className="main-button">Projects</button></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
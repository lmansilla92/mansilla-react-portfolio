import { Link, useLocation } from 'react-router-dom';

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
                    <Link to='/portfolio' className='main-button'>
                        Portfolio
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
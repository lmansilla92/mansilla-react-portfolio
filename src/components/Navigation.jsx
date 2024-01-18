import { Link, useLocation } from 'react-router-dom';

function Navigation () {
    // store current page's path name to currentPage variable
    const currentPage = useLocation().pathname;
    console.log('currentPage', currentPage);

    return (
        <nav className="main-nav">
            <ul className="main-links">
                <li>
                    {/* Using ternary operator to make nav button active when current page equals pathname */}
                    <Link to='/' className={currentPage === '/' ? 'main-button active' : 'main-button'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' className={currentPage === '/about' ? 'main-button active' : 'main-button'}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className={currentPage === '/contact' ? 'main-button active' : 'main-button'}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='/portfolio' className={currentPage === '/portfolio' ? 'main-button active' : 'main-button'}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to='/resume' className={currentPage === '/resume' ? 'main-button active' : 'main-button'}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
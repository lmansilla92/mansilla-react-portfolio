import '../App.css'

function Navigation () {
    return (
        <nav className="main-nav">
            <ul className="main-links">
                <li>
                    <a href="#"><button className="main-button">Home</button></a>
                </li>
                <li>
                    <a href="#about-me"><button className="main-button">About Me</button></a>
                </li>
                <li>
                    <a href="#contact-anchor"><button className="main-button">Let's Connect</button></a>
                </li>
                <li>
                    <a href="#projects-anchor"><button className="main-button">Projects</button></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
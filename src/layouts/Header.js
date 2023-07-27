import {Link,Outlet} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <div className="header__container">
                    <div className="header__logo">codeWithJay.ph</div>
                    <div className="header__content">
                        <Link to="/home" className="link__item">Home</Link>
                        <Link to="/contact" className="link__item">Contact</Link>
                        <Link to="/about" className="link__item">About</Link>
                        <Link to="/blog" className="link__item">Blog</Link>
                    </div>
                </div>
                
            </nav>
        </header>
    )
}
export default Header;
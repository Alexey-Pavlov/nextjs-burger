import {FaHamburger} from 'react-icons/fa'

const Header = () => {
    return (<header>
        <div>
            <FaHamburger/>
        </div>
        <nav>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Testimonials</a>
            <a href="">Burgers</a>
        </nav>
    </header>)
}

export default Header

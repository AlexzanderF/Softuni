import Link from './Link';

const Footer = () => {
    return (
        <footer className="Footer">
            <ul>
                <Link number="1" />
                <Link number="2" />
                <Link number="3" />
                <Link number="4" />
                <Link number="5" />
                <Link number="6" />
                <Link number="7" />
                <Link number="8" />
                <Link number="9" />
                <Link number="10" />
                <Link number="11" />
                <li className="listItem"><img src="/blue-origami-bird-flipped.png" alt="" /></li>
            </ul>
            <p>Sofware University &copy; 2021</p>
        </footer>
    );
}

export default Footer;
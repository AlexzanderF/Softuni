import Link from './Link';

const Navigation = () => {

    return (
        <nav className="Navigation" >
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="logo" /></li>
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
            </ul>
        </nav>
    );
}

export default Navigation;
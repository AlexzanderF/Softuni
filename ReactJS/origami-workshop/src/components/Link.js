const Link = (props) => {

    return (
        <li className="listItem">
            <a href="#">Goint to {props.number}</a>
        </li>
    );
}

export default Link;
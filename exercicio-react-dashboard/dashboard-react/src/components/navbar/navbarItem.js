function NavbarItem(props) {
    return (
        <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="/" id={props.id}>
                <i class="fas fa-bell fa-fw"></i>
                {/* <!-- Counter - Alerts --> */}
                <span class="badge badge-danger badge-counter">{props.content}</span>
            </a>
        </li>
    )
}
export default NavbarItem;
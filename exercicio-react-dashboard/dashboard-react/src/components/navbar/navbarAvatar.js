function NavbarAvatar(props) {
    return (
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="/" id="userDropdown">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{props.content}</span>
                <img class="img-profile rounded-circle" src={props.avatar} width="60" alt="avatar" />
            </a>
        </li>
    )
}
export default NavbarAvatar;
import NavbarAvatar from "./navbarAvatar";
import NavbarItem from "./navbarItem";

function Navbar(props) {
    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Navbar --> */}
            <ul class="navbar-nav ml-auto">

                {/* <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                        <i class="fas fa-bell fa-fw"></i>
                        <span class="badge badge-danger badge-counter">3+</span>
                    </a>
                </li> */}
                <NavbarItem 
                    content = {"3+"} 
                    id = {"alertsDropdown"}
                />

                {/* <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i class="fas fa-envelope fa-fw"></i>
                        <span class="badge badge-danger badge-counter">7</span>
                    </a>
                </li> */}

                <NavbarItem 
                    content = {"7"} 
                    id = {"messagesDropdown"}
                />

                <div class="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                {/* <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="/" id="userDropdown">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                        <img class="img-profile rounded-circle" src={dummy_avatar} width="60" alt="avatar" />
                    </a>
                </li> */}
                <NavbarAvatar 
                    content = {"Walter White"}
                    avatar = {props.avatar}
                />

            </ul>

        </nav>
    )
}
export default Navbar;
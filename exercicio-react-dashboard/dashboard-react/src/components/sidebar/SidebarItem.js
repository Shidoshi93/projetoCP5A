import '../../assets/css/app.css'

function SidebarItem(props) {
    return(
        <li class="nav-item">
            <a class="nav-link collapsed" href="/">
              <i class={props.class}></i>
              <span>{props.content}</span>
            </a>
        </li>
    )
}
export default SidebarItem;
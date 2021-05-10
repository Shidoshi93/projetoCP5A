import '../../assets/css/app.css'

function SidebarItem(props) {
    return(
        <li class="nav-item active">
            <a class="nav-link" href="/">
              <i class={props.class}></i>
              <span>{props.content}</span>
            </a>
        </li>
    )
}
export default SidebarItem;
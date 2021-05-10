import SidebarItem from "./SidebarItem";

function Sidebar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          {/* <!-- Sidebar - Brand --> */}
          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div class="sidebar-brand-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Admin</div>
          </a>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider my-0" />

          <SidebarItem 
            content = {"Dashboard"}
            class = {"fas fa-fw fa-tachometer-alt"} 
          />

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div class="sidebar-heading">Actions</div>

          <SidebarItem 
            content = {"Pages"}
            class = {"fas fa-fw fa-folder"}
          />

          <SidebarItem 
            content = {"Charts"}
            class = {"fas fa-fw fa-chart-area"}
          />

          <SidebarItem
            content = {"Tables"} 
            class = {"fas fa-fw fa-table"}
          />
          {/* <!-- Divider --> */}
          <hr class="sidebar-divider d-none d-md-block" />
        </ul>
    )
}
export default Sidebar;
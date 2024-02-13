import {sidebar} from "./SideBar.module.css"
const SideBar = ({selectedTab, setSelectedTab}) =>{
  
  return <div className={`${sidebar} d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary`}>
  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    
    <span className="fs-4">Menus</span>
  </a>
  <hr/>
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item" onClick={() => {setSelectedTab("Home")}}>
      <a href="#" className={`nav-link text-dark  ${selectedTab === "Home" && "active text-white"}`} aria-current="page">
        Home
      </a>
    </li>
    <li className="nav-item" onClick={() => {setSelectedTab("Create Post")}}>
      <a href="#" className={`nav-link text-dark  ${selectedTab === "Create Post" && "active text-white"}`}>Create Post
      </a>
    </li>
    
  </ul>
  <hr/>
  <div className="dropdown">
    <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
     
      <strong>mdo</strong>
    </a>
    <ul className="dropdown-menu text-small shadow">
      <li><a className="dropdown-item" href="#">New project...</a></li>
      <li><a className="dropdown-item" href="#">Settings</a></li>
      <li><a className="dropdown-item" href="#">Profile</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Sign out</a></li>
    </ul>
  </div>
</div>
}
export default SideBar;
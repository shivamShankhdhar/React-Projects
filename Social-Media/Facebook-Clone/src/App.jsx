import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import PostListProvider from './store/Posts-Store'
import { useState } from 'react'

function App() {
 const [selectedTab,setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
    <div className="container-fluid container-css container-padding-margins">
      <div className="row">
        <div className="col">
          <Header/>
        </div>
      </div>
      <div className="row ">
        <div className="col-2">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        </div>
        {selectedTab === "Home" ? <div className="col">
          <div className="row">
          <Posts></Posts>
          </div>
          
          </div>:<div className="col">
       <CreatePost/>
        </div>}
      </div>
      <div className="row">
        <div className="col">
          <Footer/>
        </div>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import ErrorMessage from './components/ErrorMessage'
import Posts from './components/Posts'
import PostListProvider from './store/Posts-Store'

import react from 'react'

function App() {
 const [selectedTab,setSelectedTab] = react.useState("Home");
  return (
    <PostListProvider>
    <div className="container-fluid container-css container-padding-margins">
      <div className="row">
        <div className="col">
          <Header/>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-2">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        </div>
        {selectedTab === "Home" ? <div className="col">
          <div className="row">
          <Posts></Posts>
          <ErrorMessage></ErrorMessage>
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

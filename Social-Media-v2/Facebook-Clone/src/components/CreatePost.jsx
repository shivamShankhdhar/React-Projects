import { FaRegUserCircle } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { PiSubtitlesBold } from "react-icons/pi";
import { FcViewDetails } from "react-icons/fc";
import { useContext, useRef } from "react";
import { PostList } from "../store/Posts-Store";
const CreatePost  = () =>{
  const postTitleElement = useRef();
  const postBodyElement  = useRef();
  const postTagElement   = useRef();
  const userIdElement    = useRef();

  const {addPost} = useContext(PostList);

  const handleAddPost = (event) =>{
    event.preventDefault();
    const postTitle   = postTitleElement.current.value;
    const postBody    = postBodyElement.current.value;
    const postTag     = postTagElement.current.value.split(' ');
    const userId      = userIdElement.current.value;
    addPost(postTitle,postBody,postTag,userId);

    postTitleElement.current.value  = "";
    postBodyElement.current.value   = "";
    postTagElement.current.value    = "";
    userIdElement.current.value     = "";
  }


  return <div className="container mt-3">
    <div className="row justify-content-center">
      <div className="col-8 ">
        <h1>Create Post</h1>
      </div>
    </div>
    <form onSubmit={handleAddPost}>
    <div className="row justify-content-center">
      <div className="col-8">

      <div className="mb-3">
                <label forname="user-id" className="form-label"><FaRegUserCircle /> User ID</label>
                <input ref={userIdElement} type="text" className="form-control" id="user-id" placeholder="Enter user id..."/>
              </div>


              <div className="mb-3">
                <label forname="post-title" className="form-label"><PiSubtitlesBold /> Post Title</label>
                <input ref={postTitleElement} type="text" className="form-control" id="post-title" placeholder="Enter Post Title here..."/>
              </div>

        <div className="mb-3">
          <label forname="post-details" className="form-label"><FcViewDetails /> Post Details</label>
          <textarea ref={postBodyElement} className="form-control" id="post-details" rows="5" placeholder="Enter Post Details here..."></textarea>
        </div>

        <div className="mb-3">
                <label forname="post-tag" className="form-label"><IoPricetagOutline />  Post Tag</label>
                <input ref={postTagElement} type="text" className="form-control" id="post-tag" placeholder="Enter tag here..."/>
              </div>

        <div className="mb-3">
          <button type="submit" className ="btn btn-sm btn-primary">Post</button>
        </div>

      </div>
      
    </div>
    </form>
  </div>

  ;
}
export default CreatePost;
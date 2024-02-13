import { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai"
import { PostList } from "../store/Posts-Store";
import { FaRegUserCircle } from "react-icons/fa";
const Post = ({ post }) =>{
  const {deletePost} = useContext(PostList)
  return <div className="col-5 m-3 mb-sm-0 ">
    <div className="card">
      <div className="card-body pb-0">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag)=><span key={tag} className="badge text-bg-warning py-2 mx-1">{tag}</span>)}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" title="delete this item" onClick={(event) => deletePost(post.id)}>
        <AiTwotoneDelete />    
        </span>
        
        <div className="alert alert-primary px-3 py-1 mt-3" role="alert">
        <small>The post has been reacted by <strong>{post.reactions}</strong></small> People
      </div>
      <div className="alert alert-primary px-3 py-1 mt-3">
         <small> <FaRegUserCircle /> {post.userId}</small> 
      </div>

      </div>
    </div>
  </div>;
}
export default Post;
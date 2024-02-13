import { AiTwotoneDelete } from "react-icons/ai"
const Post = ({ post }) =>{
  return <div className="col-5 m-3 mb-sm-0 ">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag)=><span class="badge text-bg-warning py-2 mx-1">{tag}</span>)}
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" title="delete this item">
        <AiTwotoneDelete />    
        </span>
        
        <div class="alert alert-primary mt-3 p-1" role="alert">
        <button type="button" class="btn btn-primary btn-sm">
        Likes <span class="badge text-bg-secondary">{post.reactions}</span>
      </button>
      </div>

      </div>
    </div>
  </div>;
}
export default Post;
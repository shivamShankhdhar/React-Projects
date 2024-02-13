const CreatePost = () =>{
  return <div className="container mt-3">
    <div className="row justify-content-center">
      <div className="col-8 ">
        <h1>Create Post</h1>
      </div>
    </div>
    <form>
    <div className="row justify-content-center">
      <div className="col-8">
      <div className="mb-3">
  <label forName="post-title" className="form-label">Post Title</label>
  <input type="email" className="form-control" id="post-title" placeholder="Enter Post Title here..."/>
</div>
<div className="mb-3">
  <label forName="post-details" className="form-label">Post Details</label>
  <textarea className="form-control" id="post-details" rows="5" placeholder="Enter Post Details here..."></textarea>
</div>

<div className="mb-3">
  <button type="submit" className ="btn btn-sm btn-success" >Create Post</button>
</div>

      </div>
      
    </div>
    </form>
  </div>

  ;
}
export default CreatePost;
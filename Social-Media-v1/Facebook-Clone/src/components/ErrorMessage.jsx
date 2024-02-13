import { useContext } from "react"
import { PostList } from "../store/Posts-Store"

const ErrorMessage = () => {
  const {postList} = useContext(PostList);
  return <div className="row mt-5">
    <div className="col text-center">
      {postList.length === 0 && <h1>There is no post here </h1>}
    </div>
  </div>
}
export default ErrorMessage;
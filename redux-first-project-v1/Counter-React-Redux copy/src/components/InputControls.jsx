import { useRef } from "react";
import { useDispatch } from "react-redux";

const InputControls = () => {
  const dispatch = useDispatch();
  const InputElement = useRef();

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: parseInt(InputElement.current.value),
      },
    });
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: parseInt(InputElement.current.value),
      },
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 mx-0">
          <input
            ref={InputElement}
            type="text"
            className="form-control"
            placeholder="Enter a number"
            required
          />
        </div>
        <div className="col-3 mx-0">
          <button className="btn btn-info mx-0 mb-0 btn-sm" onClick={handleAdd}>
            Add
          </button>
          <button
            className="btn btn-danger mx-1 mb-0 btn-sm"
            onClick={handleSubtract}
          >
            Subtract
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputControls;

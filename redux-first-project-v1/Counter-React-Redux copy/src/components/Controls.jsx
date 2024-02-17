import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY-TOGGLE" });
  };
  return (
    <p>
      <button
        className="btn btn-primary mx-2 mb-0 btn-sm"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        className="btn btn-success mx-2 mb-0 btn-sm"
        onClick={handleDecrement}
      >
        -1
      </button>
      <button
        className="btn btn-warning mx-2 mb-0 btn-sm"
        onClick={handlePrivacyToggle}
      >
        Privacy Toggle
      </button>
    </p>
  );
};
export default Controls;

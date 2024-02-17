import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <p className="fw-bold">
      Counter Value : <span className="text-success">{counter}</span>
    </p>
  );
};
export default Counter;

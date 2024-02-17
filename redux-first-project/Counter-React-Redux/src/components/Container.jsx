const Container = ({ children }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="card" style={{ width: "50rem" }}>
          <div className="card-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Container;

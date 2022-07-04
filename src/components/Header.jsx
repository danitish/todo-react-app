import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid bgColor p-5 mb-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 style={{ letterSpacing: 15 }}>My Todo App</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

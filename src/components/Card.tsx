import Logo from "../assets/images/CT_LOGO_NEW.jpeg"


const Card = () => {
  return (
    <>
      Coding Temple Student
      <div className="card" style={{margin:"width: 18rem;"}}>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          <img className="logo" src={Logo} alt="Logo" />
          <img className="logo" src={Logo} alt="Logo" />
          <img className="logo" src={Logo} alt="Logo" />
          <img className="logo" src={Logo} alt="Logo" />
          <img className="logo" src={Logo} alt="Logo" />
          
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

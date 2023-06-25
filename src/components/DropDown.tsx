
const DropDown = () => {
  return (
    <>
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Done with HW?
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#" role="button">Yes</a></li>
    <li><a className="dropdown-item" href="#" role="button">No</a></li>
  </ul>
</div>
    </>
  );
};

export default DropDown;

import { Link } from "react-router-dom";

const Item = ({ ele }) => {
  const { image, name, price } = ele; //Desestructuración del prop ele. 

  return (
    <div className="col-md-4 my-5">
      <div className="card shadow m-2 py-5 rounded flex-column">
        <Link to={"/item/" + ele.id} title="Ver descripción">
          <div className="d-flex align-items-center justify-content-center" width={10}>
            <img src={image} className="card-image-top" alt={name} width={200}/>
          </div>
        </Link>
        <div className="card-body text-center">
          <Link to={"/item/" + ele.id} className="text-dark" title="Ver descripción">
            <h6 className="card-title fs-5">{name}</h6>
          </Link>
          <p>
            <span className="fs-4">${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;

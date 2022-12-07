import { Link } from "react-router-dom";

const Item = ({ ele }) => {
  const { image, name, price } = ele;
  return (
    <div className="col-md-3 my-5">
      <div className="card shadow m-2 py-5 rounded flex-column">
        <img src={image} className="card-image-top mt-2" alt={name} />
        <div className="card-body text-center">
          <Link to={"/item/" + ele.id} className="text-dark">
            <h6 className="card-title">{name}</h6>
          </Link>
          <p>
            <b>${price}</b>
          </p>
          <button className="btn btn-primary">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Item;

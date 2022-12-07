import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { image, name, description, price, stock } = item;

  return (
    <div className="row justify-content-center">
      <h1 className="text-center p-3 col-md-4">{name}</h1>
      <div className="col-md-10">
        <div className="card shadow m-5 rounded flex-row p-5">
          <img src={image} className="image-fluid img__detail" alt={name} />
          <div className="card-body d-flex flex-column justify-content-around align-items-center text-center">
            <h2>${price}</h2>
            <p className="text-start ">{description}</p>
            <ItemCount stock={stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

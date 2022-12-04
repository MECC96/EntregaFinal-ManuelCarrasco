import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const {image, name, description, price,stock} = item;

    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={image} alt={name} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{name}</h1>
                <p>{description}</p>
                <p><b>${price}</b></p>
                <ItemCount stock={stock} />
            </div>
        </div>
    )
}


export default ItemDetail;
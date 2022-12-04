import { Link } from 'react-router-dom';

const Item = ({ele}) => {
    const {image, name, description, price} = ele;
return (
    <div className='col-md-4'>
        <div className="card shadow m-5 rounded">
            <img src={image} className="card-image-top mt-2" alt={name}/>
            <div className="card-body text-center">
                <h6 className="card-title">{name}</h6>
                <p className="card-text">{description}</p>
                <p><b>${price}</b></p>
                <Link to={"/item/" + ele.id} className="text-decoration-none text-dark">
                    <button className="btn btn-primary">Ver Descripcion</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Item;
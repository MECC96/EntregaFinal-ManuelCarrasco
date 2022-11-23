import React from 'react'

const Item = ({img}) => {
    return (
        <div className="container-fluid col-md-4">
            <div className="d-flex flex-wrap justify-content-center my-3">
                <div className='col-md-8 shadow rounded '>
                    <div class="card">
                        <img src={img} class="card-img-top" alt="AlBorder Logo"/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Juguete</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" class="btn btn-primary">Agregar a Carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
import React from 'react'

const Carousel = ({imgUno, imgDos, imgTres}) => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center my-3">
                <div id="carouselExampleIndicators" className="carousel slide my-1" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner d-flex">
                        <div className="carousel-item active">
                            <img src={imgUno.img} className="d-block w-100 " alt={imgUno.altUno}/>
                        </div>
                        <div className="carousel-item">
                            <img src={imgDos.img} className="d-block w-100" alt={imgUno.altDos}/>
                        </div>
                        <div className="carousel-item">
                            <img src={imgTres.img} className="d-block w-100" alt={imgUno.altTres}/>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
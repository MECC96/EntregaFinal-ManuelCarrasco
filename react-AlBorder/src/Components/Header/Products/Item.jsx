import React,{ useEffect, useState } from 'react'
import ItemCount from './ItemCount'

const Item = () => {
    const [item , setItem] = useState([]);
    //array de objetos de productos

    const items = [
            {id:1, name:"Comelento Trixie", description:"Description", stock:10, price:6200, image:"./images/comelento-trixie.jpg"},
            {id:2, name:"Disco común Disc Dog", description:"Description", stock:9, price: 1300, image:"./images/disc-dog.jpg"},
            {id:3, name:"Hueso KONG Classic Grande", description:"Description", stock:8, price: 8600, image:"./images/hueso-classic.jpg"},
            {id:4, name:"Juego Interactivo Trixie Torre", description:"Description", stock:7, price: 9600, image:"./images/juego-torre-trixie.jpg"},
            {id:5, name:"KONG Classic", description:"Description", stock:10, price:4200, image:"./images/kong-classic.jpg"},
            {id:6, name:"LickiMat Tuff Buddy", description:"Description", stock:9, price: 7500, image:"./images/lickiMAt-tuff-buddy.jpg"},
            {id:7, name:"Pelota KONG con soga y chifle", description:"Description", stock:8, price: 2700, image:"./images/pelota-soga.jpg"},
            {id:8, name:"Soga de Algodón", description:"Description", stock:7, price: 800, image:"./images/soga-algodon.jpg"},
            {id:9, name:"KONG Extreme", description:"Description", stock:7, price: 4500, image:"./images/kong-extreme.jpg"}
        ];

        useEffect(() => {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(items)
                }, 3000);
            })
                promise.then((data) => {
                    setItem(data);
                })
            }, [])

    return (
        <div className='row justify-content-between'>
            {
                item.map(ele =>(
                    <div className="card col-md-3 shadow m-5 rounded" key={ele.id}>
                        <img src={ele.image} className="card-img-top mt-2" alt={ele.name}/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{ele.name}</h5>
                            <p className="card-text">{ele.description}</p>
                            <p><b>${ele.price}</b></p>
                            <a href="/" className="btn btn-primary">Agregar a Carrito</a>
                            <ItemCount/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Item
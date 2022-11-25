import React from 'react'
import Client from './Client'

const Clients = () => {
    return (
        <div className='container d-flex flex-column'>
            <h3 className='text-center p-3'>Clientes</h3>
            <Client src={"https://randomuser.me/api/portraits/women/21.jpg"} position={"col-md-4 my-1 mx-5 align-self-start"}/>
            <Client src={"https://randomuser.me/api/portraits/men/21.jpg"} position={"col-md-4 my-1 mx-5 align-self-end"}/>
            <Client src={"https://randomuser.me/api/portraits/women/31.jpg"} position={"col-md-4 my-1 mx-5 align-self-start"}/>
        </div>
    )
}

export default Clients
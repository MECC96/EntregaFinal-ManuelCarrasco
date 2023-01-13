const Form = () => {
    return (
        <div>
            <div className="container-fluid my-3 d-flex flex-column">
                <h3 className='text-center p-3'>Contáctanos</h3>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 header my-3 shadow m-3 py-3 rounded">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label mb-2">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label mb-2">Déjanos tu mensaje</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
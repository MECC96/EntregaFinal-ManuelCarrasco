
const Form = () => {
    return (
        <div className="container-fluid my-3 d-flex flex-column">
            <h3 className='text-center p-3'>Contáctanos</h3>
            <div className="row d-flex justify-content-center">
                <div className="col-md-7 header my-3 shadow m-3 py-5 rounded">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
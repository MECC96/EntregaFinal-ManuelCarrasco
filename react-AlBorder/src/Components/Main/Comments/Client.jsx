
const Client = ({src, position}) => {
    return (
        <div className="container-fluid my-3">
            <div className="row d-flex flex-column">
                <div className={position}>
                    <div className="card clients d-flex shadow rounded">
                        <img src={src} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client
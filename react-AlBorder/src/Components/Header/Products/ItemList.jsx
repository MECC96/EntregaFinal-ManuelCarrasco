import Item from "./Item"

const ItemList = ({item}) => {
    return (
        <div className="my-3">
            <h3 className='text-center p-3'>Productos</h3>
            <div className="row">
                {item.map(ele=> <Item key={ele.id} ele={ele}/>)}
            </div>
        </div>
    )
}

export default ItemList;
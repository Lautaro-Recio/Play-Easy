import Item from "../Item/Item"
export default function ItemDetail({products}){
    return(
        <div  className='col-md-12 divCards'>
            {
                products.map(function(producto){
                    return(
                        <Item key={producto.id} Item={producto}/>
                    )
                })
            }
        </div>
    )  
}
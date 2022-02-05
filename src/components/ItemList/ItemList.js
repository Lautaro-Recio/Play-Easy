import Item from '../Item/Item'




export default function ItemList({products}){
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
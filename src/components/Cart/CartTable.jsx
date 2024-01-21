import CartItem from './CartItem';
export default function CartTable({cart, onRefresh}) {

    return (
        <div className="row align-content-center p-5" style={{ height: "fit-content"}}>
            <div className="col">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item) => {
                                return <CartItem product={{
                                    id: item.id,
                                    image: item.product_image,
                                    link: "http://localhost:3000/productDetails/" + item.product_id,
                                    name: item.product_name,
                                    price: item.product_price,
                                    size: item.product_size,
                                    color: item.product_color,
                                    quantity: item.product_quantity,
                                    onRefresh: onRefresh
                                }} />
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
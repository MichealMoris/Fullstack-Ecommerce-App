import CartItem from './CartItem';
export default function CartTable() {
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
                        <CartItem product={{
                            image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_ea1ad2a2-ba0d-4dd2-b29a-e51fd931583b_compact.jpg?v=1674275324",
                            link: "",
                            name: "Droubook Space gray",
                            price: 1180.00,
                            size: "M",
                            color: "Magenta",
                        }} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
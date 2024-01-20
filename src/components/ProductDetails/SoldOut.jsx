import ItemCounter from "./ItemCounter";
export default function SoldOut(){
    return (
        <div className="container-fluid justify-content-between">
            <div className="row" style={{ justifyContent: "start" }}>
                <div className="col-1">
                    <button className="btn btn-dark product-buttons">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
                <div className="col-6">
                    <button className="btn btn-dark" style={{ width: 100 + "%", cursor: "default"}}>Sold Out</button>
                </div>
                <div className="col-3">
                    <ItemCounter max={0} />
                </div>
            </div>
        </div>
    )
}
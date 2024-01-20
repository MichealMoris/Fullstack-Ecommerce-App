import Card from './Card';

export default function AllProductsCategory({ headTitle, products }) {

    return (
        <div className='container mt-5 mb-5'>
            <h1 className=' text-center'>{headTitle}</h1>
            <div className='.cards mb-5 p-5'>
                <div className='container'>
                    <div className='row row-cols-4'>
                        {
                            products.map((value, index) => {
                                return <Card product={value} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

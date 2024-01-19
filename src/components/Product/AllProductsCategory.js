import React from 'react'
import Card from './Card';

export default function AllProductsCategory({ headTitle }) {
    const products = [
        { id: 1, title: "Drou watch ultra", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345", oldprice: 3456, newprice: 7878, rate: 3 },
        { id: 2, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p6_large.jpg?v=1674275329", oldprice: 34560, newprice: 78787, rate: 5 },
        { id: 3, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p10_78f5d5ed-818a-4a91-88a1-433a7f408c84_large.jpg?v=1674275341", oldprice: 346, newprice: 78768, rate: 4 },
        { id: 4, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_large.jpg?v=1674275335", oldprice: 346, newprice: 78768, rate: 5 },
        { id: 5, title: "Drou watch ultra", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345", oldprice: 3456, newprice: 7878, rate: 3 },
        { id: 6, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p6_large.jpg?v=1674275329", oldprice: 34560, newprice: 78787, rate: 5 },
        { id: 7, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p10_78f5d5ed-818a-4a91-88a1-433a7f408c84_large.jpg?v=1674275341", oldprice: 346, newprice: 78768, rate: 4 },
        { id: 8, title: "DrouPods max", image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_large.jpg?v=1674275335", oldprice: 346, newprice: 78768, rate: 5 },

    ]
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

import HomeSwiper from './HomePage/HomeSwiper'
import LatestProduct from './Product/LatestProduct'
import HurryUp from './Blog/HurryUp'
import PopularProduct from './Product/PopularProduct'
import Discount from './Footer/Discount'
import Icons from './Footer/Icons'
export default function Home(){
    return (
        <div>
         
        <HomeSwiper />
        <LatestProduct />
        <HurryUp />
        <PopularProduct />
        <Discount />
        <Icons />
        
    </div>
    )
}
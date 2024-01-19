import LendingPage from './LendingPage'
import LendingPage2 from './LendingPage2'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function HomeSwiper() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <LendingPage />
                </SwiperSlide>

                <SwiperSlide>
                    <LendingPage2 />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

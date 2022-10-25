import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import mainImg from "../assets/images/main.png";
export default function Main() {
  return (
    <section className="container-fluid">
        <div className="row">
            <div className="col-md-6 col-12">
              <div className="row justify-content-center">
                <div className="col-12 col-md-9 col-lg-10">
                  <span className='sm-heading'>
                    Welcome
                  </span>
                  <h4>
                    SLEEK HOMES SOLUTIONS LTD
                    CREATED WITH YOU IN MIND 
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 np">
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                  <img src={mainImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={mainImg} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
    </section>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import mainImg from "../assets/images/main.png";
import waterMarkImg from "../assets/images/sleekhomes.png";
export default function Main() {
  return (
    <section className="main container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 main-left">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-8 ">
                  <span className='sm-heading mb-2  '>
                    Welcome
                  </span>
                  <h4 className='mb-5'>
                    SLEEK HOMES SOLUTIONS LTD <br />
                    CREATED WITH YOU IN MIND 
                  </h4>
                  <img className='watermark' src={waterMarkImg} alt="" />
                  <h1 className='mt-3 pt-2'>SLeek homes</h1>
                  <a className='btn btn-theme mt-5' href="#get-in-touch">GET IN TOUCH</a>
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

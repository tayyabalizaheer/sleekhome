import Partner1 from "../assets/images/partner1.svg";
import Partner2 from "../assets/images/partner2.svg";
import Partner3 from "../assets/images/partner3.svg";

export default function Partner() {
  return (
    <section className="partner py-4">
      <div className="container">
        <div className="row my-5 justify-content-center ">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="row">
              <div className="col-6">
                <img src={Partner1} alt="" />
              </div>
              <div className="col-3">
                <img src={Partner2} alt="" />
              </div>
              <div className="col-3">
                <img src={Partner3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

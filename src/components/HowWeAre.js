import Img from "../assets/images/howweare.png";

export default function HowWeAre() {
  return (
      <section className="container-fluid how-we-are py-4">
          <div className="row my-5">
              <div className="col-md-6 col-12 left">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-8 img-container">
                        <img src={Img} alt=""/>
                        <span>About us</span>
                    </div>
                </div>
                
            </div>
            <div className="col-md-6 col-12 right">
                  <h3 className="line">Who we are</h3>
                  <p className="mt-4">
                      Tired of struggling to recruit tenants and having to chase rent arrears? How about the endless maintenance calls and expensive agency fees?
                      You have found yourself in the right place! At Sleek Homes Solutions, we pride <br />
                      ourselves in managing every single aspect of your HMO, allowing you to spend time on the things which matter the most to you!
                    <br /><br />
                      Does it sound too good to be true? <br />
                      As specialists in managing HMOs we are committed to proving you with a reliable, safe, and person-centred service. We are therefore established members of the Property Redress Scheme, the National Residential Landlord Association, the
                      Deposit Protection Service, and the Information Commission Officer.

                  </p>
            </div>
        </div>
    </section>
  )
}

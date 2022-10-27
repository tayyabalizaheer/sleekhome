import Phone from "../assets/images/phone.svg";
import Email from "../assets/images/email.svg";

export default function ContactUs() {
  return (
    <section className="contact-us how-we-are py-4">
      <div className="container">
        <div className="row my-5">
          <div className="col-md-8 col-12 right">
            <span className='sm-heading mb-2  '>
              CONTACT US  
            </span>
            <h3 className="line">Get in touch</h3>
            <ul className="list">
              <li>
                <img src={Phone} alt="" />
                <span>01172447370</span>
              </li>
              <li>
                <img src={Email} alt="" />
                <span>esther.umambo@sleekhomesolutions.co.uk</span>
              </li>
              <li>
                <img src={Email} alt="" />
                <span>fortune.moore@sleekhomesolutions.co.uk</span>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-12 ">
            <form action="">
                <div className="form-input">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="form-input">
                <textarea type="text" placeholder="Further Details" rows={5}></textarea>
                </div>
                <div className="form-input">
                  <button className="btn btn-theme">SUBMIT</button>
                </div>
            </form> 

          </div>

        </div>
      </div>
      
    </section>
  )
}

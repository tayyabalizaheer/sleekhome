

import Phone from "../assets/images/phone.svg";
import Email from "../assets/images/email.svg";
import toastr from 'toastr';
import 'toastr/build/toastr.css';
export default function ContactUs() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = new FormData(event.currentTarget);
    
    console.log('sumbit click', payload, event.currentTarget);
    // const url = process.env.REACT_APP_API_URL + "login";
    toastr.success('Processing...');
    const url = "https://backend.sleekhomesolutions.co.uk/api/contact-us";
    const response = await fetch(url, {
      method: 'POST',
      body: payload
    });
    if (response.status===200){
      const dataJson = await response.json();
      if (dataJson.success) {
        toastr.success(dataJson.message);
      }else{
        toastr.warning(dataJson.message);
      }
    } else if (response.status === 400){
      const dataJson = await response.json();
      if (dataJson.errors){
        dataJson.errors.forEach(function(value,index){
          toastr.error(value);
        });
      }
    }
    else {
      toastr.error("Something went wrong!");
    }
  }
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
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="form-input">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="form-input">
                <textarea type="text" name="detail" placeholder="Further Details" rows={5}></textarea>
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

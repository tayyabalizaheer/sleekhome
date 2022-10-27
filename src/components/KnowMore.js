import faqs from "../data/Faq.json";
import img from "../assets/images/knowmore.png";
export default function KnowMore() {
    return (
        <section className="services py-4">
            <div className="container my-5">
                <div className="row justify-content-center text-center">
                    <span className='sm-heading mb-2  '>
                        Know more
                    </span>
                    <h4 className="col-12 col-md-6">
                        Find out more about our services by
                        booking a free consultation.
                    </h4>
                </div>
                <div className="row banner mt-5">
                    <div className="col-md-6 col-12 pe-md-5">
                        <h5>Landlords</h5>
                        <h6>How does it work?</h6>
                        <p>
                            We will take on the management of your property, and pay you a guaranteed sum of rent each month, usually between 3-5 years.
                            <br /><br />
                            Your job will then be to relax, and to simply collect your rent. Sleek Homes Solutions will  let the property to our professional clients. We will cover all the letting costs and keep your property in excellent condition by even doing most of small repairs ourselves. 
                        </p>
                        <h5 className="my-4">FAQs</h5>
                        <div className="accordion" id="accordionExample">
                            {faqs.landlord && faqs.landlord.map((e, index) => {
                                return (
                                    <div key={index} className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#landlord-collapse"+index} aria-expanded="false" aria-controls="collapse">
                                           {e.question}
                                        </button>
                                        </h2>
                                        <div id={"landlord-collapse"+index} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {e.answer}
                                        </div>
                                        </div>
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-md-6 col-12 ps-md-5">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

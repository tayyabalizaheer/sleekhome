import faqs from "../data/Faq.json";
import img from "../assets/images/tenant.png";
export default function Tenant() {
    return (
        <section className="services py-4">
            <div className="container my-5">
                <div className="row banner mt-5">
                    <div className="col-md-6 col-12 pe-md-5">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-12 ps-md-5 tenant">
                        <h5>Tenants</h5>
                        <p>
                            Are you tired of occupying run down, dilapidated accommodations, with endless house repairs that never get sorted?
                            <br /><br />
                            At Sleek Homes Solutions Ltd, we focus on providing you with clean, beautifully decorated and affordable homes.
                            Other benefits include:
                        </p>
                        <ul>
                            <li> Well- designed, stylish accommodation </li>
                            <li> All bills included </li>
                            <li> Professional and friendly service </li>
                            <li> Weekly cleaning of communal areas </li>
                            <li> Timely maintenance repairs </li>
                        </ul>
                        <h5 className="my-4">FAQs</h5>
                        <div className="accordion" id="accordionExample">
                            {faqs.tenant && faqs.tenant.map((e, index) => {
                                return (
                                    <div key={index} className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#tenant-collapse"+index} aria-expanded="false" aria-controls="collapse">
                                           {e.question}
                                        </button>
                                        </h2>
                                        <div id={"tenant-collapse"+index} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {e.answer}
                                        </div>
                                        </div>
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

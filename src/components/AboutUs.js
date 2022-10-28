import Img1 from "../assets/images/about1.svg";
import Img2 from "../assets/images/about2.svg";

export default function AboutUs() {
  return (
    <section className="about-us how-we-are py-4">
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 col-12 right">
            <span className='sm-heading mb-2  '>
              MEET THE TEAM
            </span>
            <h3 className="line">About us</h3>
            <p className="mt-4">
              Sleek Homes Solutions Ltd is run by 2 amazing lifelong friends and now business partners Esther-Marie Umambo and Fortune Moore.
              <br /><br />
              Both Esther and Fortune are nurses who have always been interested in properties. Their role as nurse prompts them to help people on a daily basis, and this is the core focus of their services. They want all parties to benefit from their ethical,
              responsible and knowledgeable ways of managing properties.
            </p>
          </div>
          <div className="col-md-6 col-12 ">
            <div className="row">
              <div className="col-6 img-container">
                <img src={Img1} alt="" />
                <div className="detail">
                  <h5>Esther-Marie Umambo</h5>
                  <span>Co-founder and Director</span>
                </div>
              </div>
              <div className="col-6">
                <img src={Img2} alt="" />
                <div className="detail">
                  <h5>Fortune Moore</h5>
                  <span>Co-founder and Director</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      
    </section>
  )
}

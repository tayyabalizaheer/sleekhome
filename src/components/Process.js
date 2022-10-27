import data from "../data/Process.json";
import Image from "../hooks/Image";
// import guaranteeImg from "../assets/images/guarantee.png";
export default function Process() {
  
  return (
        <section className="process py-4">
          <div className="container">
            <div className="row my-5">
              <div className="col-12">
                  <span className='sm-heading mb-2  '>
                      The process
                  </span>
                  <h3 className="line">How does it work?</h3>
              </div>
            </div>
            <div className="row">
              {data && data.map((e, index) => {
                  return (
                      <div key={index} className="col-12 col-md-6 col-lg-3 p-5">
                          <div className="row justify-content-center">
                                <div className="col-6">
                                <Image path={e.icon}/>
                                </div>
                                <div className="col-12 mt-3 text-center">
                                  <h5>{e.title}</h5>    
                                  <p className="mt-4">{e.description}</p>
                                </div>

                          </div>
                      </div>
                  )
              })}
            </div>
          </div>
        </section>
  )
}

function Home() {
  return (
    <>
      <section>
        <header>
          <nav className="navbar  navbar-expand-lg  bg-body-tertiary  ">
            <div
              className="container-fluid d-flex align-items-center g-0  "
              style={{ height: "76px" }}
            >
              <div className="col-lg-3    d-flex justify-content-center">
                <img
                  src="src\HomeSection\v4_285.png"
                  alt="error"
                  style={{
                    width: "276px",
                    height: "44px",
                    marginTop: "12px",
                  }}
                />
              </div>

              <button
                className="navbar-toggler  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse col-lg-9   "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav navbar-light bg-light mb-2 mb-lg-0  d-flex   ">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      PRODUCTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      TESTIMONIALS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      GALLERY
                    </a>
                  </li>
                  <li className="me-2">
                    <button
                      type="button"
                      className="btn btn-danger px-3 py-2 "
                      style={{ borderRadius: "29px" }}
                    >
                      <i className="fa-solid fa-phone me-2"></i>
                      0580493696
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="home container-fluid ">
          <div className="container-fluid text-light">
            <div className="row">
              <div className="col-lg-6 align-content-end Roofing ">
                <h2
                  style={{
                    fontWeight: "400",
                    fontSize: "50px",
                    lineHeight: "71.09px",
                    fontFamily: "Michroma",
                  }}
                >
                  Auckland’s Roofing <br />
                  Industry Experts
                </h2>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "25px",
                    fontFamily: "Saira",
                  }}
                >
                  At Aspect Roofing, we have more than a decade of experience in
                  the roofing
                  <br /> industry. We can supply and install long run and metal
                  tiles including metal
                  <br /> shingles for new metal roofing projects in Auckland.
                </p>
                <button
                  className="btn btn-outline-light "
                  style={{ fontFamily: "saira" }}
                >
                  Request a FREE quote today!
                </button>
              </div>
            </div>
          </div>
          <div
            className="container-fluid g-0 
        "
          >
            <div className="row  ">
              <div className="col-lg-12 pe-0   Recent-Projects d-flex  justify-content-end  align-items-end ">
                <div className="col-lg-6 ">
                  <div className="row g-0 d-flex  align-items-baseline justify-content-between">
                    <div className=" col-xl-3 col-lg-4  col-md-4  col-sm-3 col-5 ">
                      <h5 className="text-danger">Recent Projects</h5>
                    </div>
                    <div className="col-xl-8 col-lg-7  col-md-5 col-sm-4 col-6 border  border-danger "></div>
                  </div>

                  <div
                    className="row d-flex   text-danger  border  bg-light g-0 py-3"
                    style={{ fontFamily: "saira" }}
                  >
                    <div className="col-lg-4 col-md-4  col-sm-4 col-4  ps-2">
                      <h2
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "25.18px",
                        }}
                      >
                        01
                      </h2>
                      <h
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "22.04px",
                        }}
                      >
                        Trimrib - Style and Simplicity
                      </h>
                      <h2
                        style={{
                          fontSize: "12px",
                          fontWeight: "300",
                          lineHeight: "18.89px",
                          color: "#3E3E3E",
                        }}
                      >
                        Cashmore Contractors Ltd
                      </h2>
                    </div>
                    <div className="col-lg-4 col-md-4  col-sm-4 col-4  ps-5">
                      <h2
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "25.18px",
                        }}
                      >
                        02
                      </h2>
                      <h
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "22.04px",
                        }}
                      >
                        Long Run Cladding
                      </h>
                      <h2
                        style={{
                          fontSize: "12px",
                          fontWeight: "300",
                          lineHeight: "18.89px",
                          color: "#3E3E3E",
                        }}
                      >
                        Cashmore Contractors Ltd
                      </h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4  col-4 ps-5 ">
                      <h2
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "25.18px",
                        }}
                      >
                        03
                      </h2>
                      <h
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "22.04px",
                        }}
                      >
                        Sunderland Development
                      </h>
                      <h2
                        style={{
                          fontSize: "12px",
                          fontWeight: "300",
                          lineHeight: "18.89px",
                          color: "#3E3E3E",
                        }}
                      >
                        Haydn & Rollett
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

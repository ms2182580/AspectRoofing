export default function Product() {
  return (
    <>
      <section className="mt-5  mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="ps-3">
                <h1
                  style={{
                    fontFamily: "Michroma",
                    //   fontSize: "30px",
                    fontWeight: "500",
                    lineHeight: "42.66px",
                  }}
                >
                  Our Products
                </h1>
              </div>
            </div>
          </div>
          <div className="row   p-0 m-0">
            <div className="col-lg-5">
              <img
                src="./src/OurProductSection/v4_160.png"
                alt="error"
                style={{ width: "100%", height: "379px" }}
              />
              <p className="text-danger pt-5">Metal Tile Roofing</p>
              <p>
                We offer top brand metal roofing solutions. The new generation
                of metal roofing offers an ultra-modern, high- value choice for
                residential buildings, with the latest materials and roof design
                choices.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="./src/OurProductSection/v4_161.png"
                alt="error"
                style={{ width: "100%", height: "379px" }}
              />
              <p className="text-danger pt-5">Long Run Roofing</p>
              <p>
                We have a large range of the latest metal tiles including metal
                shingles in a various selection of colours and styles. These
                very tough roofing options are long lasting and low maintenance.
              </p>
            </div>
            <div className="col-lg-2 align-content-center text-danger  d-flex">
              <div className="h-75  align-content-center">
                <i className="fa-solid fa-arrow-right"></i>
                <p>see our full range</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

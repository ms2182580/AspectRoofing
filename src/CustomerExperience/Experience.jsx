export default function Experience() {
  return (
    <>
      <section>
        <div className="container-fluid experience">
          <div className="row text-white    ">
            <div className="col-lg-10 mt-5  ">
              <div className="ps-2 pt-5 ">
                <p
                  style={{
                    fontFamily: "Michroma",
                    fontSize: "30px",
                    fontWeight: "400px",
                    lineHeight: "42.66px",
                  }}
                >
                  Customer Experiences
                </p>
              </div>
            </div>
            <div className="col-lg-2 mt-5  align-content-end">
              <div className="pt-5 ps-5">
                <p
                  style={{
                    fontFamily: "Saira",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "22.04px",
                  }}
                >
                  View All
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mt-5">
              <div className="pt-4">
                <p
                  className="text-white"
                  style={{
                    fontFamily: "saira",
                    fontSize: "16px",
                    fontWeight: "300",
                    lineHeight: "30px",
                  }}
                >
                  <img
                    src="./src/CustomerExperience/quote (2).png"
                    alt="error"
                    height={"40px"}
                    className="mb-2"
                  />
                  &nbsp; &nbsp; &nbsp;We have used Aspect roofing on numerous
                  occasions over the years and they have proven what a great{" "}
                  <br /> company they are, backed by a team of helpful hard
                  working guys always doing what ever it takes to get our <br />{" "}
                  jobs completed with in our time frame. I can highly recommend
                  Aspect
                  roofing.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img
                    src="./src/CustomerExperience/quote (1).png"
                    alt="error"
                    height={"40px"}
                  />
                </p>
                <p
                  className="text-white pb-5 mb-5"
                  style={{
                    fontFamily: "saira",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "25.18px",
                  }}
                >
                  David Kenny
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

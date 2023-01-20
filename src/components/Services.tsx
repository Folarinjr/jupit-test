import { Vector, StrokeRight, StarImg } from "./Icons";

const Services = () => {
  return (
    <section id="services" className="service">
      <div className="star-img">
        <StarImg />
      </div>
      <div className="service-container">
        <div className="service-card">
          <div className="text-box">
            <div className="text">
              <div className="icon-box">
                <div className="img-box">
                  <Vector fill="none" stroke="currentColor" />
                </div>
              </div>
              <h3>Fast Transaction</h3>
              <p>
                Invest in crypto anytime, anywhere with our safe, secure, and
                easy to use online platform
              </p>
            </div>
            <div className="bttn">
              <a href="#">
                Get Started{" "}
                <div className="arrow-box">
                  <StrokeRight fill="none" stroke="currentColor" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="text-box">
            <div className="text">
              <div className="icon-box">
                <div className="img-box">
                  <Vector fill="none" stroke="currentColor" />
                </div>
              </div>
              <h3>Secure Wallet</h3>
              <p>
                Invest in crypto anytime, anywhere with our safe, secure, and
                easy to use online platform
              </p>
            </div>
            <div className="bttn">
              <a href="#">
                Get Started{" "}
                <div className="arrow-box">
                  <StrokeRight fill="none" stroke="currentColor" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="text-box">
            <div className="text">
              <div className="icon-box">
                <div className="img-box">
                  <Vector fill="none" stroke="currentColor" />
                </div>
              </div>
              <h3>Built for You</h3>
              <p>
                Invest in crypto anytime, anywhere with our safe, secure, and
                easy to use online platform
              </p>
            </div>
            <div className="bttn">
              <a href="#">
                Get Started{" "}
                <div className="arrow-box">
                  <StrokeRight fill="none" stroke="currentColor" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="text-box">
            <div className="text">
              <div className="icon-box">
                <div className="img-box">
                  <Vector fill="none" stroke="currentColor" />
                </div>
              </div>
              <h3>Customer First</h3>
              <p>
                Invest in crypto anytime, anywhere with our safe, secure, and
                easy to use online platform
              </p>
            </div>
            <div className="bttn">
              <a href="#">
                Get Started{" "}
                <div className="arrow-box">
                  <StrokeRight fill="none" stroke="currentColor" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

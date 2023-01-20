import React from "react";
import { Flash, EmptyWallet, BuyCrypto, Ranking, Check } from "./Icons";
import Iphone from "../images/iPhone-13-Mini.png";

interface IData {
  id: number;
  name: string;
}
const data: IData[] = [
  { id: 1, name: "Instant Transaction" },
  { id: 2, name: "Low Fee" },
  { id: 3, name: "Seamless Experience" },
  { id: 4, name: "Real Time Value" },
];

const Product = () => {
  return (
    <section id="product">
      <div className="product-container">
        <div className="product-header-box">
          <div className="product-header-text">
            <h2>Best services that works for you</h2>
          </div>
          <p>
            We provide a wide range of services to our users. Take a look at few
            of the solutions to expect from us.
          </p>
        </div>

        <div className="product-list">
          <div className="product-items">
            <div className="product-item">
              <div className="product-icon-box">
                <div className="product-img-box">
                  <Flash fill="none" stroke="currentColor" />
                </div>
              </div>

              <h3>Fast Transaction</h3>
              <p>
                Fast and easy-to-use trading services in one integrated
                platform.
              </p>
            </div>

            <div className="product-item">
              <div className="product-icon-box">
                <div className="product-img-box">
                  <EmptyWallet fill="none" stroke="currentColor" />
                </div>
              </div>

              <h3>Secure Wallet</h3>
              <p>
                You can rest easy knowing that your asset is safe with us
                anytime.
              </p>
            </div>
          </div>
          <div className="product-items">
            <div className="product-item">
              <div className="product-icon-box">
                <div className="product-img-box">
                  <BuyCrypto fill="none" stroke="currentColor" />
                </div>
              </div>

              <h3>Built for you</h3>
              <p>
                We want anyone & everyone in need for cryptocurrency gets prompt
                and clear access to their transactions.
              </p>
            </div>

            <div className="product-item">
              <div className="product-icon-box">
                <div className="product-img-box">
                  <Ranking fill="none" stroke="currentColor" />
                </div>
              </div>

              <h3>Customer First</h3>
              <p>
                You can rest easy knowing that your asset is safe with us
                anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="product-phone">
          <div className="product-picture-text">
            <h3>We make crypto easy</h3>
            <p>
              We make sure that every cryptocurrency payment and transaction are
              processed seamlessly and quickly so that you can enjoy the result
              without stress
            </p>
            <div className="product-picture-list">
              <ul>
                {data.map((d) => (
                  <li key={d.id}>
                    <div className="check-box">
                      <Check />
                    </div>{" "}
                    {d.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="picture-container">
            <img src={Iphone} alt="Iphone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

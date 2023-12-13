import "./WelcomeCard.css";
import { Checkbox, Container } from "@mantine/core";

const WelcomeCard = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <input
          className="input"
          type="radio"
          name="slide"
          id="c1"
          defaultChecked
        />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4 className="card_title">Mimarlık</h4>
              <p className="card_text">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </label>
        <input
          className="input"
          type="radio"
          name="slide"
          id="c2"
          defaultChecked
        />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4 className="card_title">İnşaat</h4>
              <p className="card_text">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default WelcomeCard;

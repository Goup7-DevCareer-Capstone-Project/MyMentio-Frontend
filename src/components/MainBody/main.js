import React from "react";
import "./main.css";
import firstImage from "../../assets/ri_psychotherapy-fill.png";
import secondImage from "../../assets/maki_star.png";
import thirdImage from "../../assets/Vector.png";
import fourthImage from "../../assets/game-icons_time-bomb.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div className="mainMission">
        <h2>Our Mission</h2>
        <p>
          Providing accessible and personalized online therapy and resources
        </p>
      </div>
      <div className="mainVission">
        <h2>Our Vission</h2>
        <p>
          To create an avenue where everyone has access to quality mental and
          feels empowered to prioritize their well-being.
        </p>
      </div>
      <section className="firstSection">
        <h1 className="mainText">HOW IT WORKS</h1>
        <div className="cardContainer">
          <div className="card">
            <h2>1</h2>
            Get matched with a licensed therapy who specializes in mental health
          </div>
          <div className="card">
            <h2>2</h2>
            Discuss your issues and situations with the therapist
          </div>
          <div className="card">
            <h2>3</h2>
            When you approve, the therapist is connected with you
          </div>
          <div className="card">
            <h2>4</h2>
            You uses your mobile app on your phone to communicate with the
            therapist
          </div>
          <div className="card">
            <h2>5</h2>
            The therapist interact with you over text, phone, and video
          </div>
          <div className="card">
            <h2>6</h2>
            Generally the therapist will not share what is discuss in therapy,
            however, they will alert you if an intervention is required
          </div>
        </div>
      </section>

      <section className="secondSection">
        <div className="card">Consult a therapist</div>
      </section>

      <section className="thirdSection">
        <h2>Why should I Choose My Mentio </h2>
        <div className="cardContainer2">
          <div className="card">
            <img src={firstImage} alt="psychotherapy" />
            <h3>Unique Therapy Toolbox</h3>
            <div className="info">
              Our services is different from other therapy services! Our
              happiness toolbox includes therapy live sessions, messaging, yoga,
              journal, activity plan and much more!
            </div>
          </div>
          <div className="card">
            <img src={secondImage} alt="star" />
            <h3>Top quality therapy </h3>
            <div className="info">
              Our program is based on proven, well-researched CBT treatments.
              Our therapists are highly qualified with a wide range of
              credentials. You can switch therapist whenever needed.
            </div>
          </div>
          <div className="card">
            <img src={thirdImage} alt="vector" />
            <h3>Save you money </h3>
            <div className="info">
              Online therapy is much less expensive compared to face-to-face
              therapy. You pay a low monthly fee for daily support from your
              therapist.
            </div>
          </div>
          <div className="card">
            <img src={fourthImage} alt="time-bomb" />
            <h3>It’s time-saving</h3>
            <div className="info">
              There is no hassle with traveling or keeping an appointment. You
              can get help from wherever you are in the world. All you need is a
              mobile phone, computer or tablet.
            </div>
          </div>
        </div>
        <button className="cardButton">Consult a therapist</button>
      </section>
    </main>
  );
};

export default Main;

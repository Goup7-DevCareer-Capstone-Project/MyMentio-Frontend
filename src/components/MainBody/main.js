import React from "react";
import "./main.css";


const Main = () => {
    return(
<main>
    <section className="firstSection">


    <h1 className="mainText">HOW IT WORKS</h1>
    <div className="cardContainer">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
       
       
    </div>
    </section>

    <section className="secondSection">
        <div className="card"></div>
    </section>

    <section className="thirdSection">
        <h2>Why Should I Choose Lorem ipsum dolor sit amet consecteteriam, tenesint?</h2>
        <div className="cardContainer2">
            <div className="card">
              <p></p>
                <h3>Unique Therapy Toolbox</h3>
                <img src="" alt="" />
            </div>
            <div className="card">
              <p></p>
                <h3>Top quality therapy </h3>
                <img src="" alt="" />
            </div>
            <div className="card">
              <p></p>
                <h3>Save you money </h3>
                <img src="" alt="" />
            </div>
            <div className="card">
              <p></p>
                <h3>It’s time-saving</h3>
                <img src="" alt="" />
            </div>
            
            
            
        </div>
       <button className="cardButton"></button>
    </section>
    
</main>
    )
}

export default Main;


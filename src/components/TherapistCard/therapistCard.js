import React from "react";
import styled from "styled-components";
import "./therapistCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

// Styled components for styling the card and grid layout
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #fff; // Replace with actual color code
  border: 1px solid #eee; // Replace with actual color code
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const Name = styled.h3`
  margin: 0;
  color: #333; // Replace with actual color code
`;

const Specialty = styled.p`
  margin: 5px 0;
  color: #666; // Replace with actual color code
`;

const Experience = styled.p`
  margin: 5px 0;
  color: #666; // Replace with actual color code
`;

const Ratings = styled.div`
  // Add styles for ratings
`;

const TherapistCard = ({ name, specialty, experience, rating, imageUrl }) => {
  return (
    <>
      <Card id="therapist">
        <ProfileImage src={imageUrl} alt={`${name} portrait`} />{" "}
        {/* Leave src blank as per user request */}
        <CardContent>
          <Name>{name}</Name>
          <Specialty>{specialty}</Specialty>
          <Experience>{experience} years</Experience>
          <Ratings>{/* Render rating stars here */}</Ratings>
        </CardContent>
      </Card>
    </>
  );
};

const TherapistGrid = ({ therapists }) => {
  return (
    <div>
    <GridContainer>
      {therapists.map((therapist, index) => (
        <TherapistCard
          key={index}
          name={therapist.name}
          specialty={therapist.specialty}
          experience={therapist.experience}
          rating={therapist.rating}
          ProfileImage={therapist.ProfileImage}
        />
      ))}
    </GridContainer>

      <div className="cardDiv">
      <Link to="/therapist" >
          <button  className="btnSecondary" onClick={onclick}>Next</button>
        </Link>
        <Link to="/issues" >
        <button className="btnSecondary" onClick={onclick}>Back</button>
        </Link>
      </div>
      </div>
  );
};

export default TherapistGrid;

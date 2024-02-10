import React from "react";
import TherapistGrid from "../components/TherapistCard/therapistCard";
import image1 from '../../src/assets/Rectangle 18.png';
import image2 from '../../src/assets/ri_psychotherapy-fill.png'


function TherapistCard() {
  const therapists = [
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
      imageUrl: {image1},
    
     
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
      imageUrl:{image2},
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    {
      name: "Doc. Okafor",
      specialty: "Psychotherapist",
      experience: 3,
      rating: "★★★★★",
    },
    // ...other therapists
  ];

  return (
    // In your App or Page component
    <TherapistGrid therapists={therapists} />
  );
}

export default TherapistCard;

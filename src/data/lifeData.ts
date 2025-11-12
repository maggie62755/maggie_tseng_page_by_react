import React from 'react';
import { GiMusicalNotes } from "react-icons/gi";
import { FaVolleyball } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";

export interface LifeItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}

export const lifeItems: LifeItem[] = [
  {
    id: 1,
    title: "Piano & Euphonium",
    description: "Music has been my passion since childhood. I find solace in playing piano melodies and the rich, warm tones of the euphonium.",
    icon: React.createElement(GiMusicalNotes)
  },
  {
    id: 2,
    title: "Volleyball",
    description: "The teamwork, strategy, and adrenaline of volleyball keep me energized. It teaches me coordination and quick decision-making skills.",
    icon: React.createElement(FaVolleyball)
  },
  {
    id: 3,
    title: "Travel Adventures",
    description: "Exploring new cultures and meeting people from different backgrounds broadens my perspective and brings new inspiration.",
    icon: React.createElement(FaPlane)
  }
];

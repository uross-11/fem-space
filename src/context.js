import React, { useState, useEffect, useContext } from "react";
import { useImportImages, useSwitchImage, useWindowWidth } from "./hooks/helpers";

import data from './data.json';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [planetIndex, setPlanetIndex] = useState(0);
  const [memberIndex, setMemberIndex] = useState(0);
  const [techIndex, setTechIndex] = useState(0);
  const [orientation, setOrientation] = useState('');


  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, []);

  const images = useImportImages();

  const { destinations, crew, technology } = data;

  const planet = destinations[planetIndex];
  const checkPlanet = planet.name.toLowerCase();
  const planetImage = useSwitchImage(images, checkPlanet);

  const member = crew[memberIndex];
  const checkMember = member.name.split(' ')[0].toLowerCase(); 
  const memberImage = useSwitchImage(images, checkMember);

  const tech = technology[techIndex];
  const width = useWindowWidth();

  useEffect(() => {
    if (width > 1024) {
      setOrientation('portrait')
    } else {
      setOrientation('landscape')
    }
  }, [width])
  
  const checkTechnology = tech.name.toLowerCase().split(' ')[0];
  const technologyImage = useSwitchImage(images, checkTechnology, orientation);
  
  return <AppContext.Provider value={{
    loading,
    planet,
    planetImage,
    setPlanetIndex,
    member,
    memberImage,
    setMemberIndex,
    tech,
    technologyImage,
    setTechIndex
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
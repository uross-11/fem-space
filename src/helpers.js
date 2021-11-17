import { useState, useEffect } from "react";

export const useImportImages = () => {
  // https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
  const importAll = r => {
    return r.keys().map(r);
  }
  const images = importAll(require.context('./assets/', true, /image/));

  return images;
}

export const useSwitchImage = (images, check, orientation) => {

  let image;
  image = images.map(img => img.default).filter(img => img.match(check));

  if(orientation) {
    image = image.filter(img => img.match(orientation))
  }

  return image[0];
}

// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
}

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowWidth;
}
///////////////////////
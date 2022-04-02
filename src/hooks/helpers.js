import { useState, useEffect } from "react";

export const useSelect = (ref, page) => {

  useEffect(() => {
    if (ref && page) {
      const arr = ref.current.children;
      const len = arr.length;
      let name;

      if(page.name) {
        name = page.name.split(' ')[0].toLowerCase();
        for (let i = 0; i < len; i++) {
          if (arr[i].id === name) {
            arr[i].classList.add('selected');
          } else {
            arr[i].classList.remove('selected');
          }
        }
      } else {
        name = page.split('/')[1];
        if (!name) {
          name = 'home';
        }
        for (let i = 0; i < len; i++) {
          if (arr[i].innerText.toLowerCase().replace(/[0-9]/g, '').trim() === name) {
            arr[i].classList.add('selected');
          } else {
            arr[i].classList.remove('selected');
          }
        }
      }
    }
  }, [ref, page])
}

export const useImportImages = () => {
  // https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
  const importAll = r => {
    return r.keys().map(r);
  }
  const images = importAll(require.context('../assets/', true, /image/));

  return images;
}

export const useSwitchImage = (images, check, orientation) => {
  if (!images || !check) return;
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
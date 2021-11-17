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
const useImportImages = () => {
  // https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
  const importAll = r => {
    return r.keys().map(r);
  }
  const images = importAll(require.context('./assets/', true, /image/));

  return images;
}

export default useImportImages;
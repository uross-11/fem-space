const useSwitchImage = (images, check) => {
  const image = images.find(img => img.default.split(/[-./]+/)[4] === check)

  return image.default;
}

export default useSwitchImage;
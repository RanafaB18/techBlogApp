import bgImage from "../assets/mountains.jpg";

const BackGroundImage = () => {
  return (
    <img
    loading="lazy"
    className="h-screen w-screen absolute -z-30"
    src={bgImage}
    alt="view of a mountain"
  />
  )
}

export default BackGroundImage

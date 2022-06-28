const Avatars: React.FC = () => {
  const images = [
    "/images/faces/w1.png",
    "/images/faces/m2.png",
    "/images/faces/w3.png",
    "/images/faces/m4.png",
  ];
  return (
    <div className="flex flex-row items-center justify-end ml-auto">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt="media"
          className="h-8 w-8 shadow-lg rounded-full border-2 border-white -ml-4 lg:-ml-3"
        />
      ))}
    </div>
  );
};
export default Avatars;

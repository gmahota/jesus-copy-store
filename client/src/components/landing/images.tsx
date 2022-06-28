const Images: React.FC = () => {
  return (
    <div
      className="screenshot overflow-hidden w-full rounded relative shadow-lg"
      style={{height: 320}}>
      <img
        src="/screenshots/1.png"
        alt="screenshot"
        className="absolute z-0 w-full h-auto"
        style={{top: 0, left: 0}}
      />
    </div>
  );
};

export default Images;

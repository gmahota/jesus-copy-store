const Icons: React.FC = () => (
  <div className="flex flex-row justify-start items-center space-x-2">
    <img src="/logos/nextjs.svg" alt="react" className="w-auto h-6" />
    <img src="/logos/react.svg" alt="react" className="w-auto h-6" />
    <img src="/logos/redux.svg" alt="redux" className="w-auto h-6" />
    <img src="/logos/postcss.svg" alt="redux" className="w-auto h-5" />
    <img
      style={{
        transform: "scale(.75)",
      }}
      src="/logos/tailwind-css.svg"
      alt="tailwind-css"
      className="w-auto h-6"
    />
  </div>
);

export default Icons;

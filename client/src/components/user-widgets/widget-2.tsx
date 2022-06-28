export type UserProps = {
  name: string;
  img: string;
};

const Widget2: React.FC = () => {
  const user: UserProps = {
    name: "Lucas smith",
    img: "m1.png",
  };
  return (
    <div className="relative flex items-center justify-start h-64 w-full overflow-hidden user-widget-2">
      <img
        src="/images/post-4.jpg"
        alt="media"
        className="absolute inset-0 object-cover w-full h-48 z-1"
      />
      <div className="absolute bottom-0 left-0 right-0 w-full h-24 px-8 bg-white dark:bg-gray-800 -translate-y-7 z-2">
        <div className="flex items-center justify-center">
          <div className="shrink-0 w-24">
            <img
              src={`/images/faces/${user.img}`}
              alt={user.name}
              className="w-24 h-24 rounded-full shadow-lg ring -translate-y-7"
            />
          </div>
          <div className="w-full ml-4">
            <div className="text-xs font-light text-gray-500 uppercase">
              Members
            </div>
            <div className="text-lg font-bold">{user.name}</div>
          </div>
          <div className="shrink-0 hidden lg:flex space-x-2">
            <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
            <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget2;

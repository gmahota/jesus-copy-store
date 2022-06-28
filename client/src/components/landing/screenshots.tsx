import Link from "next/link";

export type ItemProps = {
  title: string;
  url: string;
  img: string;
};

const Screenshots: React.FC = () => {
  const backgrounds: ItemProps[] = [
    {
      title: "Light",
      url: "/demo-1",
      img: "/screenshots/1.png",
    },
    {
      title: "Dark",
      url: "/demo-2",
      img: "/screenshots/2.png",
    },
  ];
  const items: ItemProps[] = [
    {
      title: "Default sidebar",
      url: "/demo-1",
      img: "/screenshots/1.png",
    },
    {
      title: "Small sidebar",
      url: "/demo-3",
      img: "/screenshots/5.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center mb-4">
        <div className="text-sm leading-6 text-blue-500 font-semibold tracking-wide uppercase mb-4">
          Available backgrounds
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center mb-4">
          {backgrounds.map((item, i) => (
            <div className="w-full p-8 text-center lg:w-1/3 lg:p-2" key={i}>
              <div className="flex flex-col mb-2 lg:mb-4">
                <Link href={item.url}>
                  <a className="text-sm uppercase">{item.title}</a>
                </Link>
                <div className="w-full h-64 mt-4 overflow-hidden rounded shadow-lg">
                  <Link href={item.url}>
                    <a>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-auto"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <div className="mb-4 text-sm font-semibold tracking-wide text-blue-500 uppercase leading-6">
          Available layouts
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center mb-4">
          {items.map((item, i) => (
            <div className="w-full p-8 text-center lg:w-1/3 lg:p-2" key={i}>
              <div className="flex flex-col mb-2 lg:mb-4">
                <Link href={item.url}>
                  <a className="text-sm uppercase">{item.title}</a>
                </Link>
                <div className="w-full h-64 mt-4 overflow-hidden rounded shadow-lg">
                  <Link href={item.url}>
                    <a>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-auto"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Screenshots;

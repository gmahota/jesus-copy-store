import clsx from "clsx";
import Logo from "components/left-sidebar-2/logo";
import Ratings from "components/e-commerce/ratings";
import Colors from "components/e-commerce/colors";
import Brands from "components/e-commerce/brands";
import Categories from "components/e-commerce/categories";

export type TitleProps = {
  children: React.ReactNode;
};
const Title: React.FC<TitleProps> = ({children}) => (
  <div className="flex flex-row items-center justify-start w-full text-xs font-normal tracking-wider uppercase">
    {children}
  </div>
);

const Index: React.FC = () => {
  return (
    <>
      <div
        className={clsx(
          "left-sidebar-2 w-full space-y-4 max-w-xs border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
        )}>
        <div>
          <div className="space-y-4">
            <div className="w-full p-4">
              <Logo />
            </div>
            <div className="w-full px-4 space-y-2">
              <Title>Categories</Title>
              <Categories />
            </div>

            <div className="w-full px-4 space-y-2">
              <Title>Rating</Title>
              <div className="py-2">
                <Ratings />
              </div>
            </div>

            <div className="w-full px-4 space-y-2">
              <Title>Color</Title>
              <div className="py-2">
                <Colors />
              </div>
            </div>

            <div className="w-full px-4 space-y-2">
              <Title>Brand</Title>
              <div className="py-2">
                <Brands />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;

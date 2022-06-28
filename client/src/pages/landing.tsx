import Link from "next/link";
import Logo from "components/landing/logo";
import Icons from "components/landing/icons";
import Images from "components/landing/images";
import Title from "components/landing/title";
import Text from "components/landing/text";
import Features from "components/landing/features";
import Options from "components/landing/options";
import Screenshots from "components/landing/screenshots";

const Index: React.FC = () => (
  <div className="container mx-auto max-w-screen-lg lg:px-4">
    <div className="flex items-center justify-around w-full px-4 py-4 text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
      <Logo />
      <div className="hidden lg:flex lg:flex-row whitespace-nowrap">
        <Link href="/documentation">
          <a className="px-4 py-2 text-xs font-bold uppercase">Documentation</a>
        </Link>
        <a
          href="https://themeforest.net/item/dboard-nextjs-admin-template/27870045"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 rounded-lg hover:text-blue-700 hover:border-blue-700">
          Purchase now
        </a>
      </div>
    </div>
    {/*section*/}
    <div className="pt-4 mb-4 lg:mb-16 lg:pt-24">
      <div className="flex flex-wrap items-center">
        <div className="w-full p-4 lg:w-3/5">
          <Title />
          <Text />
          <div className="flex flex-row items-center justify-start mb-6">
            <Icons />
          </div>
          <div className="flex flex-row items-center justify-start">
            <a
              href="https://themeforest.net/item/dboard-nextjs-admin-template/27870045"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-blue-500 uppercase bg-transparent border border-blue-500 rounded-lg hover:text-blue-700 hover:border-blue-700">
              Purchase now
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-2/5">
          <Images />
        </div>
      </div>
    </div>

    {/*section*/}
    <Options />

    {/*section*/}
    <Features />

    {/*section*/}
    <Screenshots />

    <div className="pb-4 text-xs text-center text-gray-400">
      &copy; 2021 Batchthemes
    </div>
  </div>
);

export default Index;

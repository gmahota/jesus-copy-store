import {useAppSelector} from "store";
import Link from "next/link";
import Login from "components/sample-forms/login";
import Text from "components/login-2/text";
import Logo from "components/login-2/logo";
import Footer from "components/login-2/footer";

const Index: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {name} = config;
  return (
    <>
      <div className="flex flex-row w-full h-screen overflow-hidden">
        <div className="relative items-start justify-between hidden w-1/2 p-8 text-white lg:flex lg:flex-col bg-login-2">
          <Logo />
          <Text />
          <Footer />
        </div>
        <div className="flex flex-col items-start justify-center w-full p-8 text-gray-900 bg-white dark:bg-gray-900 dark:text-white lg:w-1/2 lg:p-24">
          <p className="mb-2 text-2xl font-bold text-blue-500">
            Login to {name}
          </p>
          <Login />
          <div className="flex flex-row w-full mt-8">
            <span className="mr-1 text-secondary">New user?</span>
            <span>
              <Link href="/create-account">
                <a className="text-blue-500">Create account here</a>
              </Link>
            </span>
          </div>
          <div className="w-full">
            <span>
              <Link href="/forgot-password">
                <a className="text-blue-500">Forgot password?</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

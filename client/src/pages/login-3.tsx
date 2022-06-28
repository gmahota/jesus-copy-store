import {useAppSelector} from "store";
import Link from "next/link";
import Login from "components/sample-forms/login";
import SocialMedia from "components/login-3/social-media";

const Index: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {name} = config;
  return (
    <>
      <div className="flex flex-row w-full h-screen overflow-hidden text-gray-900 dark:text-white">
        <div className="items-center justify-center hidden w-1/2 border-r border-gray-100 dark:border-gray-800 lg:flex lg:flex-col bg-gray-50 dark:bg-gray-800">
          <img
            className="object-contain w-auto h-64 mb-8"
            src="/images/illustration.svg"
            alt="svg"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full p-4 bg-white dark:bg-gray-900 lg:w-1/2 lg:px-24">
          <div className="flex flex-col w-full mb-4">
            <div className="text-sm font-light text-gray-500 uppercase">
              Login
            </div>
            <div className="text-sm font-bold">
              Please enter your username and password to login
            </div>
          </div>
          <Login />
          <div className="mt-4 mb-2">
            <SocialMedia />
          </div>
          <div className="flex flex-row w-full">
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
          <div className="flex flex-col w-full mt-4">
            <div className="flex flex-row space-x-2">
              <Link href="/privacy-policy">
                <a>Privacy policy</a>
              </Link>
              <Link href="/terms-of-service">
                <a>Terms of service</a>
              </Link>
              <Link href="/contact-us">
                <a>Contact us</a>
              </Link>
            </div>
            <div className="mt-auto text-gray-300">&copy; {name} 2021</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

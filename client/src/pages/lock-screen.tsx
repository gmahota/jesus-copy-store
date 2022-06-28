import Link from "next/link";
import CenteredForm from "layouts/centered-form";
import LockScreen from "components/sample-forms/login";

const Index: React.FC = () => {
  return (
    <CenteredForm
      title="Lock screen"
      subtitle="Please enter your username and password to login">
      <div className="flex flex-col w-full items-center justify-center mb-4">
        <img
          src="/images/faces/m1.png"
          alt="media"
          className="w-20 h-20 my-2 rounded-full ring"
        />
      </div>

      <LockScreen />

      <div className="flex flex-row w-full mt-4">
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
    </CenteredForm>
  );
};

export default Index;

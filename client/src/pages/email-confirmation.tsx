import Link from "next/link";

const EmailConfirmation: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-xl text-center">
      <img
        className="object-contain w-auto h-64 mb-16"
        src="/images/illustration.svg"
        alt="svg"
      />
      <div className="mb-8 text-center">
        A email has been send to{" "}
        <span className="text-blue-500">your@email.com</span>. Please check for
        an email from dashboard and click on the included link to reset your
        password.
      </div>
      <div className="flex w-full">
        <Link href="/">
          <a className="font-bold uppercase text-base px-6 py-3 rounded-lg w-full bg-blue-500 hover:bg-blue-600 text-white">
            Go back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EmailConfirmation;

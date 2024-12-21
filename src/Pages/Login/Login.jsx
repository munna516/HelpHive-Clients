import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginLottie from "../../assets/Lottie/LoginLottie.json";
import GoogleLogin from "../../Components/Google Login/GoogleLogin";


const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <div className="md:flex  w-full  mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-center font-bold text-gray-600 ">
            Welcome back !
          </p>

          <GoogleLogin></GoogleLogin>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase">
              or login with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn btn-accent text-white w-full"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500">Don't have account? </p>
            <Link to="/register">
              <p className="font-bold text-blue-500 hover:underline uppercase">
                Register
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <Lottie animationData={loginLottie}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;

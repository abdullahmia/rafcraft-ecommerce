import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { BiLoaderAlt } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/layouts/Wrapper";
import { useLoginMutation } from "../features/auth/authApi";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const user = useAuth();
  

  const [login, { isLoading, error: responseError, data }] = useLoginMutation();

  useEffect(() => { 
    if (user) {
      navigate('/account');
    }
     if (responseError?.data) {
      setError(responseError?.data?.message);
     }

     if (data?.token && data?.user) {
      reset();
      navigate('/account');
     }

  }, [data, responseError, navigate, user, reset])

  // login handler
  const loginhandler = (data) => {
    setError('');
    login(data);
  }

  return (
    <Wrapper title="Login | RAFCRAFT">
      <div className="container py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">LOGIN</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Login if you are a returing customer
          </p>
            { error && <p className="text-primary py-2">{error}</p> }
          <form onSubmit={handleSubmit(loginhandler)}>
            <div className="space-y-4">
              <div>
                <label className="text-gray-600 mb-2 block">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="input-box"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Password <span className="text-primary">*</span>
                </label>
                <input
                  {...register('password')}
                  type="password"
                  className="input-box"
                  placeholder="type password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreement"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"

                  required
                  />
                <label
                  htmlFor="agreement"
                  className="text-gray-600 ml-3 cursor-pointer"
                >
                  Accept Terms & Conditions
                </label>
              </div>
              <Link href="/forgot-password" className="text-primary">
                Forgot Password?
              </Link>
            </div>
            <div className="mt-4">
              <button
                disabled={isLoading}
                type="submit"
                className="flex items-center justify-center w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                {
                  isLoading ? <BiLoaderAlt className="animate-spin" /> : "Login"
                }
              </button>
            </div>
          </form>
          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;

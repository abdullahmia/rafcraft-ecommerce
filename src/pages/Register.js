import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/layouts/Wrapper";
import { useSingupMutation } from '../features/auth/authApi';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const user = useAuth();  

  const [signup, { isLoading, error: responseError, data }] = useSingupMutation();


  useEffect(() => {
    if (user) {
      navigate('/account');
    }
    if (responseError?.data) {
      setError(responseError?.data?.message);
    }

    if (data?.token && data?.user) {
      navigate('/account');
    }

  }, [data, responseError, navigate, user])

  // register handler
  const registerHandler = (data) => {
    
    setError('');

    if (data.password === data.confirmPassword) {
      signup(data);
      reset();
    } else {
      setError("Password & confirm password doesn't matched");
    }
  }

  return (
    <Wrapper title="Register | RAFCRAFT">
      <div className="container py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">
            create an acocunt
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Register here if you don't have account
          </p>
          {error && <p className="text-primary py-2">{error}</p>}
          <form onSubmit={handleSubmit(registerHandler)}>
            <div className="space-y-4">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                <div>
                  <label className="text-gray-600 mb-2 block">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('firstName')}
                    className="input-box"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('lastName')}
                    className="input-box"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="input-box"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Password <span className="text-primary">*</span>
                </label>
                <input
                  type="password"
                  {...register('password')}
                  className="input-box"
                  placeholder="type password"
                  required
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Confirm Password
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="password"
                  {...register('confirmPassword')}
                  className="input-box"
                  placeholder="confirm your password"
                  required
                />
              </div>
            </div>
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                required
              />
              <label
                for="agreement"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                I have read and agree to the
                <p className="text-primary">
                  terms & conditions
                </p>
              </label>
            </div>
            <div className="mt-4">
              <button
                disabled={isLoading}
                type="submit"
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                create account
              </button>
            </div>
          </form>
          <p className="mt-4 text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;

import { Link } from 'react-router-dom';
import login from '../assets/images/login.jpg';
import { useState } from 'react';
import { BASE_URL } from "../config";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Login = () => {

  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <section className="px-5 lg:px-0">
      <div className="max-w-[1170px] mx-auto rounded-md shadow-md md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={login} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>
          <div className='rounded-l-lg lg:pl-16 py-10 self-center'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 px-[30px] lg:px-0'>
              Hello! Welcome to <span className='text-primaryColor'>HealMeet</span>!🎉
            </h3>
            <form className='py-4 md:py-0'>
              <div className='mb-5 px-[30px] lg:px-0'>
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor rounded-md shadow-md
                  cursor-pointer placeholder:text-textColor'
                  required
                />
              </div>
              <div className='mb-5 px-[30px] lg:px-0'>
                <input
                  type='password'
                  placeholder='Password'
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor rounded-md shadow-md
                  cursor-pointer placeholder:text-textColor'
                  required
                />
              </div>
              <div className='mt-7 px-[30px] lg:px-0'>
                <button
                  type='submit'
                  className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                >
                  Login
                </button>
              </div>
              <p className='mt-5 text-textColor text-center'>
                Don&apos;t have an account? <Link to='/register' className='text-primaryColor font-medium ml-1'>Register</Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Login
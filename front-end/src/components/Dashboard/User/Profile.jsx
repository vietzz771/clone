/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import instance from '../../../utils/http';
import { token } from '../../../config';

const Profile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    bloodType: '',
  });
  console.log(token);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData({ name: user.name, email: user.email, gender: user.gender, bloodType: user.bloodType });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await instance.put(`users/${user._id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { message } = await res.data;
      setLoading(false);
      toast.success(message);
      navigate('/users/profile/me');
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      setLoading(false);
    }
  };
  return (
    <div className="mt-10">
      <form>
        <div className="mb-5 px-[30px] lg:px-0">
          <label className="text-headingColor font-bold text-[16px] leading-7">Full Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor rounded-md shadow-md
                  cursor-pointer placeholder:text-textColor"
          />
        </div>
        <div className="mb-5 px-[30px] lg:px-0">
          <label className="text-headingColor font-bold text-[16px] leading-7">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor rounded-md shadow-md
                  cursor-pointer placeholder:text-textColor"
            aria-readonly
            readOnly
          />
        </div>
        <div className="mb-5 px-[30px] lg:px-0">
          <label className="text-headingColor font-bold text-[16px] leading-7">Blood Type:</label>
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor rounded-md shadow-md
                  cursor-pointer placeholder:text-textColor"
          />
        </div>
        <div className="mb-5 px-[30px] lg:px-0">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Gender:
            <select
              name="gender"
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className="mt-7 px-[30px] lg:px-0">
          <button
            disabled={loading && true}
            type="submit"
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            onClick={submitHandler}
          >
            {loading ? <HashLoader size={35} color="#ffffff" /> : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

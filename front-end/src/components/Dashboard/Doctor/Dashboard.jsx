import Loader from '../../Loader/Loading';
import Error from '../../Error/Error';
import useGetProfile from '../../../hooks/useInstanceData';
import Tabs from './Tabs';
import { useState } from 'react';
import avt from '../../../assets/images/doctor-img01.png';
import starIcon from '../../../assets/images/Star.png';
import DoctorAbout from '../../../pages/Doctors/DoctorAbout';
import Profile from './Profile';

const Dashboard = () => {
  const { data: doctor, loading, error } = useGetProfile('doctors/profile/me');
  const [tab, setTab] = useState('overview');

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              <div>
                {tab === 'overview' && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={avt} alt="" className="w-full" />
                      </figure>
                      <div>
                        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                          {doctor.specialization} Surgeon
                        </span>
                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">Quoc Viet</h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            <img src={starIcon} alt="" />
                            4.5
                          </span>
                          <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">(233)</span>
                        </div>
                        <p className="text-para font-[15px] lg:max-w-[390px] leading-6">Doctor bio</p>
                      </div>
                    </div>
                    <DoctorAbout doctor={doctor} />
                  </div>
                )}
                {tab === 'appointments' && <div>overview</div>}
                {tab === 'settings' && <Profile />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;

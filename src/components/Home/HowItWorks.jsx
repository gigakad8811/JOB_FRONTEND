import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobClinch Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Looking to post job openings or a job seeker searching for your
                next opportunity? JobClinch provides a seamless experience to
                connect talent with opportunity. Start your journey with us now
                and take the first step towards a better future.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Discover career moves or find candidates with JobClinch. Job
                seekers browse diverse listings matching skills. Employers post
                openings, reach qualified candidates. Simplify hiring, achieve
                goals. Start connecting today for impactful opportunities.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Advance your career or find top talent with JobClinch. Job
                seekers apply easily, employers recruit efficiently, ensuring
                the right fit. Get started today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

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
                Discover your next career move or find the perfect candidate
                with JobClinch. Job seekers can browse through a variety of job
                listings to find positions that match their skills and
                aspirations. Employers can easily post job openings and reach a
                wide pool of qualified candidates. Our platform simplifies the
                job search and hiring process, making it easier for you to
                achieve your professional goals. Start today and connect with
                opportunities that make a difference.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Advance your career or find the ideal candidate with JobClinch.
                Job seekers can apply for jobs that match their qualifications
                and career goals with ease. Employers can efficiently recruit
                suitable candidates by managing applications and viewing
                detailed resumes. Our platform is designed to facilitate a
                smooth and efficient hiring process, ensuring that the right
                talent meets the right opportunity. Get started now and take the
                next step towards success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

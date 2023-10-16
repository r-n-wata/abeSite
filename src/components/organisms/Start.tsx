import { Link } from 'react-router-dom';
import Title from '../atoms/Title';
import Footer from '../molecules/Footer';

function Start() {
  return (
    <div className="w-screen h-screen flex flex-col items-center  border-4 border-blue-50 pt-4">
      <Title addClass="mobile:text-sm" />
      <div className="mobile:w-11/12 w-1/2 mt-6 mb-6 cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out ">
        <Link to="/home">
          <img src="/assets/image1.jpg" alt="" className="w-full" />
        </Link>
      </div>
      <Footer addClass="mobile:text-[0.5rem]" />
    </div>
  );
}

export default Start;

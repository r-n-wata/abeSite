import { useEffect, useState } from 'react';
import { homeGalleryCol } from '../../utils/homeGallery';
import Header from '../molecules/Header/Header';
import Gallery from '../molecules/Gallery';
import Footer from '../molecules/Footer';
import Spinner from '../atoms/Spinner';
import SideNav from '../molecules/SideNav';
import SideNavLinks from '../atoms/SideNavLinks';
import RightNav from '../atoms/RightNav';

function Home() {
  const [showSpinner, setShowSpinner] = useState<boolean>(true);
  const { navs: leftNavs } = SideNavLinks();

  useEffect(() => {
    // Simulate an async operation (e.g., loading data) with a delay
    const delay = setTimeout(() => {
      setShowSpinner(false); // Set loading to false after a delay (simulating data loading)
    }, 200); // Simulate 2 seconds of loading time

    return () => clearTimeout(delay); // Clear the timeout on component unmount
  }, []);

  return (
    <>
      {' '}
      {showSpinner ? (
        <div className="w-screen h-screen flex justify-center mt-10">
          <Spinner />
        </div>
      ) : (
        <div className="relative h-screen w-screen overflow-x-hidden ">
          <Header />
          <main className="mb-20 relative overflow-y-scroll h-screen ">
            <SideNav
              navs={leftNavs}
              styles="left-8 text-gray-500 fixed top-[20%] mobile:hidden "
              liStyles="underline underline-offset-4	"
            />
            {/* <LanguageToggleButton styles="mobile:hidden" /> */}

            <Gallery images={homeGalleryCol} />

            <RightNav styles="right-8 fixed top-[20%] mobile:hidden " />
          </main>
          <Footer addClass="mt-20" />
        </div>
      )}
    </>
  );
}

export default Home;

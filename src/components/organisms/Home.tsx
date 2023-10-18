import { useEffect, useState } from 'react';
import { homeGalleryCol } from '../../utils/homeGallery';
import Header from '../molecules/Header/Header';
import Gallery from '../molecules/Gallery';
import Footer from '../molecules/Footer';
import Spinner from '../atoms/Spinner';
import LanguageToggleButton from '../atoms/LanguageToggleButton';

function Home() {
  const [showSpinner, setShowSpinner] = useState<boolean>(true);

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
          <main className="mb-20">
            <LanguageToggleButton styles="mobile:hidden" />
            <Gallery images={homeGalleryCol} />
          </main>
          <Footer addClass="mt-20" />
        </div>
      )}
    </>
  );
}

export default Home;

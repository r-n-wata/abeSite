import Header from '../molecules/Header/Header';
import Gallery from '../molecules/Gallery';
import Footer from '../molecules/Footer';

function Home() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden ">
      <Header />
      <main className="mb-20">
        <Gallery />
      </main>
      <Footer addClass="mt-20" />
    </div>
  );
}

export default Home;

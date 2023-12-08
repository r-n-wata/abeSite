import SideNav from '../molecules/SideNav';
import RightNav from '../atoms/RightNav';
import SideNavLinks from '../atoms/SideNavLinks';
import Header from '../molecules/Header/Header';
import Footer from '../molecules/Footer';
import Separator from '../atoms/Separator';

function Contact() {
  const { navs: leftNavs } = SideNavLinks();
  return (
    <div className="relative h-screen w-screen overflow-x-hidden mobile:overflow-hidden">
      <Header />

      <main className=" overflow-y-scroll min-h-screen ">
        <SideNav
          navs={leftNavs}
          styles="left-8 text-gray-500 fixed top-[20%] mobile:hidden "
          liStyles="underline underline-offset-4	"
        />

        <div className="flex mx-36 justify-center items-center flex-col pb-28 mobile:text-[0.86rem] h-full mobile:pb-12 mt-36 mobile:items-start">
          {' '}
          <Separator styles=" w-1/4 flex  justify-start mb-4" />
          <section className="w-full  ">
            {' '}
            <h2 className="text-4xl mb-14 mobile:text-2xl mobile:mb-4">
              Connect...
            </h2>
            <ul>
              <li className="flex justify-start items-center ">
                <img
                  src="/assets/email.png"
                  alt=""
                  className="mr-4 mobile:w-8"
                />{' '}
                abetaller@gmail.com
              </li>
              <li className="flex justify-start items-center ">
                <img
                  src="/assets/instagram.png"
                  alt=""
                  className="mr-4 mobile:w-8"
                />{' '}
                @abe.illescas
              </li>
            </ul>{' '}
          </section>
          <Separator styles=" w-1/4 flex  justify-start mt-10 mobile:mt-6" />
        </div>
        <RightNav styles="right-8 fixed top-[20%] mobile:hidden " />
        <Footer />
      </main>
    </div>
  );
}

export default Contact;

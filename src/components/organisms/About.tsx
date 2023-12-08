import { useTranslation } from 'react-i18next';
import Header from '../molecules/Header/Header';
import SideNav from '../molecules/SideNav';
import RightNav from '../atoms/RightNav';
import Footer from '../molecules/Footer';
import SideNavLinks from '../atoms/SideNavLinks';

function About() {
  const { t } = useTranslation();
  const { navs: leftNavs } = SideNavLinks();
  const p1 = t('aboutParagraphOne').split(' ');
  return (
    <section className="relative h-screen w-screen overflow-x-hidden   ">
      <Header />

      <main className=" min-h-screen overflow-y-scroll">
        <SideNav
          navs={leftNavs}
          styles="left-8 text-gray-500 fixed top-[20%] mobile:hidden h-screen"
          liStyles="underline underline-offset-4	"
        />
        {/* <LanguageToggleButton styles="mobile:hidden" /> */}

        <div className="flex flex-col justify-center items-center  pb-28 mobile:text-[0.86rem]  mobile:pb-12">
          <div className="w-8/12 mobile:w-3/4">
            <p className="">
              <span className="text-green-600 text-lg font-bold mobile:text-[0.9rem]">
                {p1[0]}
              </span>{' '}
              <span className="">{p1.slice(1).join(' ')}</span>
            </p>
            <p className="mt-10 ">{t('aboutParagraphTwo')}</p>
            <p className="mt-10 ">{t('aboutParagraphThree')}</p>
            <p className="mt-10 ">{t('aboutParagraphFour')}</p>
          </div>
        </div>

        <RightNav styles="right-8 fixed top-[20%] mobile:hidden " />
        <Footer addClass="mt-20 relative" />
      </main>
    </section>
  );
}

export default About;

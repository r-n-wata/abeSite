type FooterProps = {
  addClass?: string;
};

function Footer({ addClass }: FooterProps) {
  return (
    <footer
      className={` absolute bottom-0 flex justify-center w-full ${addClass}`}
    >
      <p
        className={`text-gray-400 text-sm text-center mb-10 mobile:text-[0.6rem] `}
      >
        COPYRIGHT © 2023 ABRAHAM ILLESCAS
      </p>
    </footer>
  );
}

export default Footer;

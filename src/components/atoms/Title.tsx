type TitleProps = {
  addClass?: string;
};

function Title({ addClass }: TitleProps) {
  return (
    <h1
      className={`tracking-widest text-gray-700 text-xl ${addClass} font-extrabold mobile:font-black`}
    >
      Abraham Illescas
      <span className="italic text-sm mobile:text-[0.7rem]">(Abe)</span>
    </h1>
  );
}

export default Title;

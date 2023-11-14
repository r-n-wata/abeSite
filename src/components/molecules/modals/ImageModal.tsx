function ImageModal({
  image,
  closeModal,
}: {
  image: {
    image: string;
    dataSheet: { title: string; description: string; size: string };
  };
  closeModal: () => void;
}) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="absolute inset-0 bg-black opacity-75"
          onClick={() => closeModal()}
        ></div>
        <div className="p-4 rounded-lg shadow-lg z-10  flex justify-center items-center object-cover ">
          <div className="flex flex-col justify-center items-center">
            <img
              src={image.image}
              alt="gallery"
              className="max-w-[80rem]  max-h-[48rem] object-contain mobile:max-w-[23rem] mobile:max-h-[25rem]"
            />

            {image.dataSheet.description && (
              <div className="rounded-md mt-6 w-52 text-gray-800 text-center bg-gray-300 py-4 px-2 mobile:text-sm mobile:mt-4 mobile:py-2 mobile:text-[0.5rem] mobile:px-2 mobile:w-56">
                <h4 className="font-extrabold mobile:font-black ">
                  {image.dataSheet.title}
                </h4>
                <span className="text-[0.9rem] mobile:text-[0.6rem]">
                  {image.dataSheet.description}
                </span>
                <p className="mobile:text-[0.6rem]">{image.dataSheet.size}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageModal;

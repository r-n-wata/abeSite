function ImageModal({
  image,
  closeModal,
}: {
  image: {
    image: string;
    dataSheet: { title: string };
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
              className="max-w-[80rem]  max-h-[48rem] object-contain mobile:max-w-[25rem] mobile:max-h-[25rem]"
            />
            <div className="rounded-md mt-6 w-52 text-gray-900 text-center bg-gray-500 py-4 mobile:text-sm mobile:mt-4 mobile:w-36 mobile:py-2">
              <h4>{image.dataSheet.title}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageModal;

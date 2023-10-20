import LazyLoad from 'react-lazy-load';

type Images = {
  images: {
    name: string;
    class?: string;
    overlayText?: {
      title: string;
    };
  }[];
};

function Gallery({ images }: Images) {
  return (
    <div className="w-full flex justify-center mt-10 mobile:mt-6">
      <div className="grid grid-cols-2 gap-2 w-1/2 mobile:w-3/4 mobile:gap-1">
        {images.map((image, i) => {
          return (
            <div
              className={` ${image?.class + ' flex justify-center'}`}
              key={i}
            >
              <LazyLoad height={'auto'} offset={0}>
                <div className="relative group">
                  <img
                    alt="gallery"
                    src={image.name}
                    key={i}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center hover:cursor-pointer">
                    {image.overlayText?.title}
                  </div>
                </div>
              </LazyLoad>{' '}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

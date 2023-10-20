import LazyLoad from 'react-lazy-load';

type Images = {
  images: {
    name: string;
    class?: string;
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
                <img
                  alt="gallery"
                  className="o"
                  src={image.name}
                  key={i}
                  loading="lazy"
                />
              </LazyLoad>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

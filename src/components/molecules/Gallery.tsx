import { homeGalleryCol } from '../../utils/homeGallery';

function Gallery() {
  return (
    <div className="w-full flex justify-center mt-10 mobile:mt-6">
      <div className="grid grid-cols-2 gap-2 w-1/2 mobile:w-3/4 mobile:gap-1">
        {homeGalleryCol.map((image, i) => {
          return (
            <div className={` ${image?.class}`} key={i}>
              <img alt="gallery" className="o" src={image.name} key={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

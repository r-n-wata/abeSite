import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import ImageModal from './modals/ImageModal';
import { Link } from 'react-router-dom';

type Images = {
  images: {
    name: string;
    class?: string;
    dataSheet?: {
      title: string;
      description?: string;
      size?: string;
    };
  }[];
};

function Gallery({ images }: Images) {
  const [showModal, setShowModal] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({
    image: '',
    dataSheet: {
      title: '',
      description: '',
      size: '',
    },
  });

  const toggleModal = (
    image: string,
    info: { title: string; description?: string; size?: string } = { title: '' }
  ) => {
    setSelectedInfo((prevState) => ({
      image: image,
      dataSheet: {
        title: info.title,
        description: info.description || '',
        size: info.size || '',
      },
    }));
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="w-full flex justify-center mt-10 mobile:mt-6">
        <div className="grid grid-cols-2 gap-2 w-1/2 mobile:w-3/4 mobile:gap-1">
          {images.map((image, i) => {
            return (
              <div
                className={` ${
                  image?.class + ' flex justify-center hover:cursor-pointer'
                }`}
                onClick={() => toggleModal(image.name, image.dataSheet)} // Pass the image name to toggleModal
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
                    {i === 0 && (
                      <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center hover:cursor-pointer">
                        <Link
                          to={'https://youtu.be/7SMI3_1zKmk'}
                          className="underline underline-offset-4 hover:text-green-300 text-lg mobile:text-sm"
                        >
                          Video
                        </Link>
                      </div>
                    )}
                  </div>
                </LazyLoad>
              </div>
            );
          })}
        </div>
      </div>
      {showModal && (
        <ImageModal
          image={selectedInfo}
          closeModal={() => toggleModal(selectedInfo.image)}
        />
      )}
    </>
  );
}

export default Gallery;

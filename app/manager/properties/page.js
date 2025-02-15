"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageCarouselQueries = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto my-16">
      {/* Carousel Section */}
      <div className="relative w-full h-96">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Carousel Image */}
          <div className="relative w-full h-full">
            <img
              src={data[currentIndex]?.imageUrl || "/api/placeholder/800/600"}
              alt={`Query ${currentIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(data[currentIndex])}
            />
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-lg font-semibold">{data[currentIndex]?.name}</h3>
              <p className="text-sm">{data[currentIndex]?.email}</p>
              <p className="text-sm">{data[currentIndex]?.phoneNumber}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto p-2">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={item.imageUrl || "/api/placeholder/150/150"}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.imageUrl || "/api/placeholder/1200/800"}
              alt="Modal view"
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="bg-white p-4 mt-2">
              <h3 className="text-lg font-semibold">{selectedImage.name}</h3>
              <p className="text-sm text-gray-600">{selectedImage.email}</p>
              <div className="mt-2">
                <h4 className="font-medium">Type:</h4>
                <div className="flex gap-2 flex-wrap mt-1">
                  {selectedImage.type.map((type, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-2 py-1 text-sm rounded"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <h4 className="font-medium">Inquiries:</h4>
                <div className="mt-1">
                  {selectedImage.Inquiry.map((inquiry, index) => (
                    <p key={index} className="text-sm text-gray-600 mt-1">
                      {inquiry}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarouselQueries;
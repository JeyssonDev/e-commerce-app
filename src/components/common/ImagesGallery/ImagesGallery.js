import React, { useEffect, useState } from "react";
import "./ImagesGallery.css";

const ImagesGallery = ({ images }) => {
    const [actualImagePosition, setActualImagePosition] = useState(0);

    const handleNextImage = () =>
        setActualImagePosition(
            (actualImagePosition) => actualImagePosition + 1
        );

    const handlePreviousImage = () =>
        setActualImagePosition(
            (actualImagePosition) => actualImagePosition - 1
        );

    const handleChangeImagenPosition = (position) =>
        setActualImagePosition(position);

    useEffect(() => {
        setActualImagePosition(0);
    }, [images]);

    return (
        <div className="images-gallery">
            <div className="gallery">
                <div className="button-gallery left">
                    {actualImagePosition > 0 && (
                        <button onClick={handlePreviousImage}>
                            <i className="fa fa-chevron-left"></i>
                        </button>
                    )}
                </div>
                <div className="button-gallery right">
                    {actualImagePosition < images?.length - 1 && (
                        <button onClick={handleNextImage}>
                            <i className="fa fa-chevron-right"></i>
                        </button>
                    )}
                </div>
                <ul
                    className="images-list"
                    style={{
                        width: `${images?.length * 100}%`,
                        transform: `translateX(-${
                            (actualImagePosition / images?.length) * 100
                        }%)`,
                    }}
                >
                    {images &&
                        images.map((image, index) => (
                            <li key={index}>
                                <img
                                    src={image}
                                    alt={`Product model ${index}}`}
                                />
                            </li>
                        ))}
                </ul>
            </div>
            <ul className="images-preview">
                {images &&
                    images.map((image, index) => (
                        <li
                            key={index}
                            className={
                                index === actualImagePosition ? "selected" : ""
                            }
                        >
                            <img
                                src={image}
                                alt={`Product model ${index}}`}
                                onClick={() =>
                                    handleChangeImagenPosition(index)
                                }
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ImagesGallery;

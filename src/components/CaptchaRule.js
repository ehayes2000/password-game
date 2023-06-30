import React, { useState, useEffect } from 'react';

const CaptchaRule = ({ images, onImageChange }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to select a random image
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    // Select a random image on component mount
    useEffect(() => {
        const image = getRandomImage();
        setSelectedImage(image);
        onImageChange(image);
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

    const handleRefresh = () => {
        let newImage = getRandomImage();
        // Ensure new image is not the same as the current image
        while (newImage === selectedImage) {
            newImage = getRandomImage();
        }
        setSelectedImage(newImage);
        onImageChange(newImage);
    };

    if (!selectedImage) return null;

    return (
        <div>
            <img src="../ext/mcdans.png" alt="random" />
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    );
}

export default CaptchaRule;

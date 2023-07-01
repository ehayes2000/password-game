import React, { useState, useEffect } from 'react';

const CaptchaRule = ({ images, setCaptcha }) => {
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
        setCaptcha(image.split("/").slice(-1)[0].split(".")[0]);
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps
    
    const handleRefresh = () => {
        let newImage = getRandomImage();
        // Ensure new image is not the same as the current image
        while (newImage === selectedImage) {
            newImage = getRandomImage();
        }
        setSelectedImage(newImage);
        setCaptcha(newImage.split("/").slice(-1)[0].split(".")[0]);
    };

    if (!selectedImage) return null;

    return (
        <div className="flex items-center">
            <img className="rounded-xl mr-6" src={process.env.PUBLIC_URL + selectedImage} alt="random" />
            <svg className="w-10 text-gray-800 hover:text-gray-600 transition-colors duration-50" onClick={handleRefresh} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </div>
    );
}




export default CaptchaRule;


import React, { useState } from 'react';

function Home() {
    const images = [
        {
            name: 'Astro',
            url: 'https://forceforfun.files.wordpress.com/2019/01/astro-reg.png?w=202&h=260'
        },
        {
            name: 'Codey',
            url: 'https://forceforfun.files.wordpress.com/2019/01/codeycuddling.png?w=348&h=348'
        },
        {
            name: 'Appy',
            url: 'https://forceforfun.files.wordpress.com/2019/01/appy.png?w=216&h=259'
        },
        {
            name: 'Einstein',
            url: 'https://forceforfun.files.wordpress.com/2019/01/einstein-flying.png'
        },
        {
            name: 'Cloudy',
            url: 'https://forceforfun.files.wordpress.com/2019/01/cloudy-1.png'
        }
    ];

    const [selectedImage, setSelectedImage] = useState('');

    const handleImageSelect = (event) => {
        const selectedUrl = event.target.value;
        setSelectedImage(selectedUrl);
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <select value={selectedImage} onChange={handleImageSelect}>
                <option value="">Select an image</option>
                {images.map(image => (
                    <option key={image.name} value={image.url}>
                        {image.name}
                    </option>
                ))}
            </select>
            {selectedImage && <div align="center"><img src={selectedImage} alt="Selected Image" /></div>}
        </div>
    );
}

export default Home;
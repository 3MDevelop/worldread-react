import { useEffect , useState } from "react";

function Banner ({ siteLang }) {
    const imageUrls = {
        en: './img/Slide-Site En.jpg',
        fa: './img/Slide-Site-persian.jpg',
        ar: './img/Slide-Site-Arabic.jpg',
    };
    const imageUrl = imageUrls[siteLang] || imageUrls.Arabic;
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        setFadeIn(true);
    }, []);


    return (
        <div className="py-3 container-fluid d-flex justify-content-center align-items-center bg-white BannerContainer">
            <div className="col-12 col-md-9">
                <img
                    className={`img-fluid rounded ${fadeIn ? 'fade-in' : ''}`}
                    src={imageUrl}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner
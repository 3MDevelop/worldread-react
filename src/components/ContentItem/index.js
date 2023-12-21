
const ContentItem = ({ itemHeader, itemLink, itemKey, userDataHandler }) => {
    let hName = ''
    let imgLink = ''

    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }

    if (isValidUrl(itemLink) && itemLink !== '') {
        let urlObject = new URL(itemLink);
        hName = urlObject.hostname.split('.')[0]
    } else {
        hName = undefined
    }

    switch (hName) {
        case 'google':
            imgLink = 'google.svg'
            break;
        case 'instagram':
            imgLink = 'instagram.svg'
            break;
        case 'apple':
            imgLink = 'appStore.svg'
            break;
        case 'facebook':
            imgLink = 'facebook.svg'
            break;
        case 'itunes':
            imgLink = 'itunes.svg'
            break;
        case 'linkedin':
            imgLink = 'linkedin.svg'
            break;
        case 'soundcloud':
            imgLink = 'soundcloud.svg'
            break;
        case 'tiktok':
            imgLink = 'tiktok.svg'
            break;
        case 'whatsapp':
            imgLink = 'whatsapp.svg'
            break;

        default:
            imgLink = 'share.svg'
            break;
    }

    return (
        <div className="d-flex justify-content-center align-items-center contentItem w-100">
            <div className="contentItemIcon bg-info rounded-circle overflow-hidden px-2 mr-2"
                style={{ backgroundImage: "url(./img/social-icons/" + imgLink + ")" }} >
            </div>
            <div className='mr-auto contentItenTxt'>
                <a href={itemLink} >{itemHeader}</a>
            </div>
            <div className='fas fa-remove text-danger p-1'
                onClick={() => {
                    fetch("https://api.worldread.net/v1/deletecontent/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userToken: localStorage.getItem('ut'),
                            contId: itemKey
                        }),
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then((data) => {
                            console.info(data)
                            userDataHandler(data)
                        })
                        .catch(error => {
                            console.error("Fetch error:", error);
                        });
                }}
            > </div>
        </div>
    )
}

export default ContentItem

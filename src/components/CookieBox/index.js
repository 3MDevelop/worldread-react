
const CookieBox = ({ siteLang, cookieHandler, setShowCookieBox }) => {
    const boxHeaders = {
        ar: 'هذا الموقع يستخدم الكوكيز',
        en: 'This website uses cookies',
    }
    const boxHeader = boxHeaders[siteLang] || boxHeaders.ar;

    const boxTexts = {
        ar: 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم. ونحن نقدم تجربة أفضل لزياراتك القادمة.',
        en: 'We use cookies to improve user experience. And we provide a better experience for your next visits.',
    }
    const boxText = boxTexts[siteLang] || boxTexts.ar;

    const accBtnLables = {
        ar: 'یقبل',
        en: 'Accept',
    }
    const accBtnLable = accBtnLables[siteLang] || accBtnLables.ar;

    const denBtnLables = {
        ar: 'ینکر',
        en: 'Deny',
    }
    const denBtnLable = denBtnLables[siteLang] || denBtnLables.ar;

    const denyFunc = () => {
        setShowCookieBox(false)  
    }

    const acceptFunc = () => {
        cookieHandler()
    };

    return (
        <div
            className={'cookieBox position-fixed m-5 fs-6 text-white bg-secondary p-4 border rounded-2 bottom-0' + ((siteLang === 'ar') ? ' start-0' : ' end-0')}
            style={{ maxWidth: '250px' }}
        >
            <div className="fw-bold">
                {boxHeader}
            </div>
            <div className={"direction-rtl mt-3" + ((siteLang === 'ar') ? ' text-end' : ' text-start')}
                style={{
                    fontSize: '0.8rem',
                    textAlign: 'justify',
                    textJustify: 'inter-word'
                }}>
                {boxText}
            </div>
            <div className={'d-flex justify-content-between mx-4 mt-4 ' + (siteLang === 'ar' ? 'flex-row-reverse' : 'flex-reverse')}>
                <div className="btn btn-sm btn-outline-light px-3" onClick={acceptFunc}>{accBtnLable}</div>
                <div className="btn btn-sm btn-outline-light px-3" onClick={denyFunc}>{denBtnLable}</div>
            </div>
        </div>
    )
}

export default CookieBox
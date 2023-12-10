import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Competition({ siteLang }) {
    const compIntroes = {
        en: (
            <div>
                <div className='pe-2 mb-1' style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                    Dear reader!
                </div>
                <div className='pe-4 mb-3' style={{ fontSize: '1.3rem' }}>
                    Hello
                </div>
                <div className='mb-4'>
                    To participate in the Tantourieh book reading contest, you have until January 19 to download it by joining the site and participate in the contest.
                </div>
            </div>
        ),
        ar: (
            <div>
                <div className='pe-2 mb-1' style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                    عزيزي القارئ!
                </div>
                <div className='pe-4 mb-3' style={{ fontSize: '1.3rem' }}>
                    مرحبًا
                </div>
                <div className='mb-4'>
                .للمشاركة في مسابقة قراءة كتاب طنطوریه، أمامك حتى 19 يناير لتحميله عبر الانضمام إلى الموقع والمشاركة في المسابقة
                </div>
            </div>
        ),
    };
    const compIntro = compIntroes[siteLang] || compIntroes.ar;

    const howtexts = {
        en: 'How to participate in the contest',
        ar: 'كيفية المشاركة في المسابقة',
    };
    const howtext = howtexts[siteLang] || howtexts.ar;

    const compContents = {
        en: 'Uploading the generated content link in the user section',
        ar: 'تحميل رابط المحتوى الذي تم إنشاؤه في قسم المستخدم',
    };
    const compContent = compContents[siteLang] || compContents.ar;

    const compGamifications = {
        en: 'Earn points in gamification',
        ar: 'كسب النقاط في الألعاب',
    };
    const compGamification = compGamifications[siteLang] || compGamifications.ar;

    return (

        <div
            className={"container-fluid d-flex flex-column justify-content-center align-items-center pb-3 p-0 " + (siteLang === 'ar' ? "text-end" : "text-start")}
            style={{ borderTop: '3px gray solid', borderBottom: '1px gray solid', backgroundColor: 'rgb(248, 248, 248)' }}
        >
            <div className="bg-white col-12 col-md-7 compHeader pt-3 mb-3 p-0" >
                <div className='px-5 mb-2 '>
                    {compIntro}
                </div>
                <div className='text-center bg-success py-2 text-white compAlert '>
                    <FontAwesomeIcon icon="fas fa-angles-down" className="fas fa-angles-down me-3" />
                    {howtext}
                    <FontAwesomeIcon icon="fas fa-angles-down" className="fas fa-angles-down ms-3" />
                </div>
            </div>

            <ol className="d-flex flex-column flex-md-row-reverse justify-content-center align-items-center compCards ">
                <li className='pt-5'>
                    <div className="icon d-flex justify-content-center align-items-end">
                        <FontAwesomeIcon icon="fas fa-file" />
                        <div className='ms-2' style={{ fontSize: '1rem' }}>50%</div>
                    </div>
                    <div className="descr">{compContent}</div>
                </li>
                <div className="compIcon fas fa-3x fa-circle-plus" style={{ color: '#f27682' }}></div>
                <li className='pt-5'>
                    <div className="icon d-flex justify-content-center align-items-center mb-2">
                        <FontAwesomeIcon icon="fas fa-gamepad" />
                        <div className='ms-2' style={{ fontSize: '1rem' }}>50%</div>
                    </div>
                    <div className="descr">{compGamification}</div>
                </li>
            </ol>
        </div>
    )
}
export default Competition
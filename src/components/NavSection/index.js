import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';
import CookieBox from '../CookieBox'
import LoginForm from '../LoginForm'
import UserProfile from '../UserProfile';

const NavSection = (
    {
        siteLang,
        siteLangHandler,
        userToken,
        userTokenHandler,
        userAuth,
        userAuthHandler,
        showCookieBox,
        setShowCookieBox,
        cookieHandler
    }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <>
            <div className="container-fluid p-0 bg-dark d-flex justify-content-center navContainer bg-danger">
                <nav
                    className="navbar navbar-dark d-flex justify-content-center p-0 col-12 col-md-9"
                >
                    <div className="container h-100 m-0 p-0 d-flex align-items-end">
                        <div className="d-flex align-items-end h-100">
                            <div className="navbar-brand h-75" href="#" title="Logo">
                                <img src="./img/logo.png" height="100%" alt="" />
                            </div>
                            <div className="text-white mx-3 siteHeaderText">World Read ..</div>
                        </div>
                        <div className="d-flex justify-content-end user-select-none ms-auto me-3" >
                            <div className={"mx-1 px-1 text-dark lngBtn text-center " + (siteLang === 'ar' ? "bg-white" : null)} onClick={() => { siteLangHandler('ar') }} >Ar</div>
                            <div className={"mx-1 px-1 text-dark lngBtn text-center " + (siteLang === 'en' ? "bg-white" : null)} onClick={() => { siteLangHandler('en') }} >En</div>
                        </div>

                        <div className="text-white">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down" className="text-right navDropDown">
                                <DropdownToggle caret className="pl-0" style={{ paddingLeft: "0.75rem", borderRadius: "7px 7px 0 0" }}>
                                    <FontAwesomeIcon icon="fas fa-user" />
                                </DropdownToggle>
                                <DropdownMenu className='text-center mt-1' end>
                                    {
                                        (userToken === "") ?
                                            <div /*onClick={() => userTokenHandler('newToken')}*/>
                                                <LoginForm userTokenHandler={userTokenHandler} />
                                            </div>
                                            : <div>
                                                <UserProfile />
                                            </div>
                                    }
                                </DropdownMenu>

                            </Dropdown>
                        </div>

                    </div>
                </nav>
            </div>
            {(showCookieBox) ? (
                <CookieBox
                    siteLang={siteLang}
                    cookieHandler={cookieHandler}
                    setShowCookieBox={setShowCookieBox}
                    setDropdownOpen = {setDropdownOpen}
                />
            ) : null}
        </>
    )
}

export default NavSection
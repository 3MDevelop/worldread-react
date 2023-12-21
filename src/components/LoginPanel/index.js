import LoginPSep from '../LoginPSep/LoginPSep'
import LoginForm from './LoginForm'
import SignupForm from '../UserSection/SignupForm'

const LoginPanel = ({ userDataHandler, userAuthHandler }) => {
    const getUserData = () => {
        fetch("https://api.worldread.net/v1/list/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userToken: localStorage.getItem('ut')
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                userDataHandler(data)
                userAuthHandler(true)
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    }


    return (
        <>
            <LoginForm userDataHandler={userDataHandler} getUserData={getUserData} />
            <LoginPSep />
            <SignupForm userDataHandler={userDataHandler} userAuthHandler={userAuthHandler} getUserData={getUserData} />
        </>
    )
}

export default LoginPanel
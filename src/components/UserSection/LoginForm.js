import { useState,useEffect } from "react"

const LoginForm = ({ userDataHandler, getUserData }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const showError = (inText) => {
        document.getElementById('massageBox').innerHTML = inText
    }

    useEffect(() => {
        if (localStorage.getItem('ut')) {
            getUserData()
        } else {
            userDataHandler(undefined)
        }
    })

    const loadUser = () => {
        fetch("https://api.worldread.net/v1/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.status === "error") {
                    showError(data.message)
                } else {

                    localStorage.setItem('ut', data.userToken)
                    getUserData()
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    }

    return (
        <div className="loginContainer d-flex justify-content-center align-items-stretch mb-3 mb-md-0" >
            <div
                className="loginPan d-flex flex-column align-items-stretch p-3 rounded"
            >
                <div className="loginTitle mb-2 text-center">Login</div>
                <div className="border-top h-100 loginForm d-flex flex-column justify-content-center align-items-between">
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control form-control-sm shadow-none"
                            placeholder="Username"
                            aria-label="logInUserName"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control form-control-sm shadow-none"
                            id="inputPassword"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div id='massageBox' className='massageBox bg-danger px-auto mt-3 mb-2 w-100 text-center rounded text-white' ></div>
                    <button
                        className="btn btn-outline-info form-control-sm p-0 px-4 shadow-none"
                        onClick={() => {
                            loadUser()
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
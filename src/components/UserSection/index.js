import { useState } from "react"
import LoginPanel from './LoginPanel'
import UserProfile from './UserProfile'

const UserSection = ({ userAuthHandler }) => {
    const [userData, setUserData] = useState()

    const userDataHandler = (newState) => {
        setUserData(newState)
    }
    return (
        <div
            className="container-fluid p-0 py-4 d-flex justify-content-center userSection"
        >
            <div className="col-12 col-md-9 d-md-flex  justify-content-start bg-white rounded"
                /*style={{ minWidth: '750px' }}*/>
                {
                    (userData)
                        ? <UserProfile userData={userData} userDataHandler={userDataHandler} userAuthHandler={userAuthHandler} />
                        : <LoginPanel userDataHandler={userDataHandler} userAuthHandler={userAuthHandler} />
                }
            </div>
        </div>
    )
}
export default UserSection

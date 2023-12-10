import { useState } from "react"
import ContentItem from './ContentItem'

const UserProfile = ({ userData, userDataHandler, userAuthHandler }) => {
    const [newContent, setNewContent] = useState('')
    const [newLink, setNewLink] = useState('')

    const addContent = () => {
        fetch("https://api.worldread.net/v1/content/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userToken: localStorage.getItem('ut'),
                contHeader: newContent,
                contLink: newLink
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
                document.getElementById('newContent').value = ''
                document.getElementById('newLink').value = ''
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    }

    return (
        <div className="container-fluid p-0 py-2 d-flex justify-content-center">
            <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-md-stretch align-items-center">
                <div className="userInfo mr-0 mr-md-3 d-flex flex-column justify-content-between align-items-center" >
                    <div className='d-flex mt-4 position-relative px-4'>
                        <div className="userImage ">
                            <image src="./img/user.png" height="100%" className="img-fluid" alt="user image" />
                        </div>
                        <div className='fa-solid fa-right-from-bracket sOutIcon text-danger'
                            onClick={() => {
                                localStorage.clear()
                                userDataHandler('')
                                userAuthHandler(false)
                            }} />
                    </div>
                    <div className="userFullName mt-2"> {userData.userFullName} </div>
                    <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-auto" >
                        <div className="mb-1 w-100">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Content Header"
                                aria-label="newContent"
                                aria-describedby="basic-addon1"
                                id="newContent"
                                onChange={(e) => setNewContent(e.target.value)}
                            />
                        </div>
                        <div className=" d-flex align-items-stretch mb-2 w-100">
                            <input
                                type="text"
                                style={{ height: "34px" }}
                                className="form-control form-control-sm h-100"
                                placeholder="Content Link"
                                aria-label="newLink"
                                aria-describedby="basic-addon1"
                                id="newLink"
                                onChange={(e) => setNewLink(e.target.value)}
                            />
                            <button
                                className="btn btn-info p-0 px-2 form-control-sm ml-1"
                                onClick={() => {
                                    addContent()
                                }}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="linkListContainer bg-white flex-md-fill">
                    {
                        userData.contentList.map((val, index) => {
                            return (
                                <ContentItem key={index} itemKey={val.ContentID} itemHeader={val.ContentName} itemLink={val.ContentLink} userDataHandler={userDataHandler} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfile
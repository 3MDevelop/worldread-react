const LoginPSep = () => {
    return (
        <>
            <div className="d-flex d-md-none justify-content-center align-items-center ">
                <div className='horSep flex-fill '></div>
                <div className='sepOr d-flex justify-content-center align-items-center'>or</div>
                <div className='horSep flex-fill'></div>
            </div>
            <div className="d-none d-md-flex flex-column justify-content-center align-items-center ">
                <div className='verSep flex-fill '></div>
                <div className='sepOr d-flex justify-content-center align-items-center'>or</div>
                <div className='verSep flex-fill'></div>
            </div>
        </>
    )
}
export default LoginPSep
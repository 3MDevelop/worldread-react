import { useRef,useState,useEffect } from "react";

const SignupForm = ({ getUserData }) => {
    const geonamesApiKey = 'YXRyc2hVN1NPOFg1anlqM0lKQ09yR0tXMFlIZXFzQVNtQndvSzc1Wg==';
    const fileInputRef = useRef(null);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [religion, setReligion] = useState('');
    const [gender, setGender] = useState('');
    const [selectedGender, setSelectedGender] = useState('Gender');
    const [bDate, setBDate] = useState('');
    const [selectedBDate, setSelectedBDate] = useState('');
    const [password, setPassword] = useState('');
    const [passStrong, setPassStrong] = useState([]);
    const [isPassStrong, setIsPassStrong] = useState(false);
    const [picture, setPicture] = useState(null);

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('Select Country');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('Select City');

    const [citySearchInput, setCitySearchInput] = useState('');
    const [countrySearchInput, setCountrySearchInput] = useState('');

    const [signupMassage, setSignupMassage] = useState('')

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleReligionChange = (e) => {
        setReligion(e.target.value);
    };

    const handleGenderChange = (gender) => {
        setSelectedGender(gender)
        setGender(gender);
    };

    const handleBDateChange = (bDate) => {
        setSelectedBDate(bDate)
        setBDate(bDate);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setSignupMassage('')
        setPassword(e.target.value);
        let inTXT = e.target.value
        var strength = 0;

        // Check password length
        if (inTXT.length >= 6) {
            strength += 1;
        }

        // Check for mixed case
        if (inTXT.match(/[a-z]/)) {
            strength += 1;
        }

        // Check for numbers
        if (inTXT.match(/\d/)) {
            strength += 1;
        }

        // Check for special characters
        if (inTXT.match(/[^a-zA-Z\d]/)) {
            strength += 1;
        }
        switch (strength) {
            case 1:
                setPassStrong({
                    val: '25%',
                    color: 'bg-red'
                })
                break;
            case 2:
                setPassStrong({
                    val: '50%',
                    color: 'bg-orange'
                })
                break;
            case 3:
                setPassStrong({
                    val: '75%',
                    color: 'bg-yellow'
                })
                break;
            case 4:
                setIsPassStrong(true)
                setPassStrong({
                    val: '100%',
                    color: 'bg-success'
                })
                break;

            default:
                setPassStrong({
                    val: '0',
                    color: 'bg-secondary'
                })
                break;
        }


    };

    const handleImageChange = (e) => {
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('signupImage').style.backgroundImage = `url('${e.target.result}')`;
                document.getElementById('signupImage').innerHTML = ''
            };
            reader.readAsDataURL(file);
        }
        /*  console.log('Selected file:', file); */
        setPicture(file);
        e.target.value = null;
    };

    const handleClearImage = () => {
        document.getElementById('signupImage').style.backgroundImage = '';
        document.getElementById('signupImage').innerHTML = 'no Image'
        setPicture(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (country === '') {
            setSignupMassage('select country')
        } else if (city === '') {
            setSignupMassage('select city')
        } else if (!isPassStrong) {
            setSignupMassage('your pass is weak !!')
        } else {
            console.info('submit')
            try {
                const formData = new FormData();
                formData.append('name', fullName);
                formData.append('username', email);
                formData.append('password', password);
                formData.append('Age', age);
                formData.append('Gentle', gender);
                formData.append('religion', religion);
                formData.append('bDate', bDate);
                formData.append('country', country);
                formData.append('city', city);
                formData.append('picture', picture);
                const response = await fetch('https://api.worldread.net/v1/register/', {
                    method: 'POST',
                    body: formData,
                });
                const responseData = await response.json();
                console.log('API Response:', responseData);
                localStorage.setItem('ut', responseData.userToken)
                getUserData()
                setFullName('');
                setEmail('');
                setPassword('');
                setCountry('');
                setCity('');
                setPicture(null);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    useEffect(() => {
        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", geonamesApiKey);

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
            .then(response => response.json())
            .then(result => {
                setCountries(result);
            })
            .catch(error => console.log('error', error));
    }, []);

    const handleCountryChange = (country) => {
        setSignupMassage('')
        setSelectedCity('Select City')
        setCity('')
        setCountry(country.name)
        setSelectedCountry(country.name)
        setCountrySearchInput('');
        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", geonamesApiKey);
        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
        fetch(`https://api.countrystatecity.in/v1/countries/${country.iso2}/cities`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setCities(result)
            })
            .catch(error => console.log('error', error));
    };

    const handleCityChange = (city) => {
        setSignupMassage('')
        setCitySearchInput('');
        setCity(city.name)
        setSelectedCity(city.name)
    }

    const handleCountryInputChange = (e) => {
        setCountrySearchInput(e.target.value);
    };

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(countrySearchInput.toLowerCase())
    );

    const handleCityInputChange = (e) => {
        setCitySearchInput(e.target.value);
    };

    const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().includes(citySearchInput.toLowerCase())
    );

    return (
        <div className="p-3 flex-fill">
            <div className="loginTitle mb-2 text-center">Signup</div>

            <div className='d-flex justify-content-center mb-3 border-top'>
                <div className="px-0 px-md-3 px-xl-5 flex-fill signupPane">
                    <form onSubmit={handleSubmit} >
                        <div className={"mx-5 mb-2 formAlertBox d-flex align-items-center justify-content-center " + ((signupMassage) ? 'fade-inB bg-danger' : null)}>
                            {signupMassage}
                        </div>
                        <div className='d-flex d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-stretch '>

                            <div className='d-flex flex-column justify-content-center align-items-center mr-3 mb-4 mb-md-0'>
                                <div id='signupImage' className='signupUserPic d-flex align-items-center justify-content-center'>
                                    no Image
                                </div>
                                <div className="container mt-3 d-flex justify-content-center align-items-stretch">
                                    <label htmlFor="fileInput" className="btn btn-sm btn-outline-primary mb-0">
                                        Select Image
                                    </label>
                                    <input
                                        className=''
                                        id="fileInput"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                        ref={fileInputRef}
                                    />
                                    <div
                                        className='btn btn-sm btn-outline-danger ml-2 fas fa-remove d-flex justify-content-center align-items-center'
                                        onClick={() => {
                                            handleClearImage()
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='flex-fill d-flex flex-column justify-content-between align-items-stretch '>

                                <input
                                    value={fullName}
                                    type="text"
                                    className="form-control form-control-sm shadow-none mb-2 md-md-0"
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    onChange={handleFullNameChange}
                                    required />

                                <input
                                    type="email"
                                    value={email}
                                    className="form-control form-control-sm shadow-none mb-2 md-md-0"
                                    id="email"
                                    placeholder="Enter your email"
                                    onChange={handleEmailChange}
                                    required />

                                <input
                                    type="password"
                                    value={password}
                                    className="form-control form-control-sm shadow-none mb-2 md-md-0"
                                    id="signUpPass"
                                    placeholder="Enter your password"
                                    onChange={handlePasswordChange}
                                    required />

                                <div className='px-2'>
                                    <div className="progress mb-1" style={{ height: '3px' }}>
                                        <div className={"progress-bar progress-bar " + passStrong.color} role="progressbar" style={{ width: passStrong.val }} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className='text-right px-2 mb-auto' style={{ fontSize: '0.7rem', color: 'rgba(0,0,0,0.3)', fontWeight: 'bolder' }}>
                                    [a-z] , [0-9] , [% $ _ -] , at least 6 character
                                </div>

                                <div className='d-flex flex-column flex-md-row justify-content-between align-items-center mb-2 md-md-0 mt-2' >
                                    <div className='d-flex flex-column flex-md-row align-items-center'>
                                        <input
                                            value={age}
                                            type="text"
                                            className="form-control form-control-sm shadow-none border-secondary"
                                            style={{ width: '45px' }}
                                            id="age"
                                            placeholder="Age"
                                            onChange={handleAgeChange} />

                                        <div className="dropup shadow-none mb-0 mt-2 mt-md-0 mx-0  mx-md-3">
                                            <div
                                                className="flex-fill overflow-hidden d-flex justify-content-between align-items-center btn btn-outline-secondary btn-sm dropdown-toggle mb-2 mb-md-0 position-relative"
                                                type="button"
                                                id="genderDropdown"
                                                data-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {selectedGender}
                                            </div>
                                            <div className="dropdown-menu shadow-none p-2 contListContainer" aria-labelledby="genderDropdown">
                                                <div className="contList">
                                                    <div>
                                                        <div className="dropdown-item" onClick={() => handleGenderChange("Male")} >
                                                            Male
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown-item" onClick={() => handleGenderChange("Female")} >
                                                            Female
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <input
                                        value={religion}
                                        type="text"
                                        className="form-control form-control-sm shadow-none  border-secondary"
                                        id="religion"
                                        placeholder="Religion"
                                        onChange={handleReligionChange} />
                                </div>
                                <div className="border border-secondary form-control-sm d-flexx justify-content-center align-items-center mb-2 ">
                                    <input
                                        type="date"
                                        className='border-0 w-100 shadow-none text-secondary'
                                        name="datepic"
                                        placeholder="DateRange"
                                        value={selectedBDate}
                                        onChange={(e) => handleBDateChange(e.target.value)}
                                    />
                                </div>

                                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    {/* Country Dropmenu */}
                                    <div className="dropup shadow-none mb-0" style={{ width: "47%" }}>
                                        <div
                                            className="flex-fill overflow-hidden d-flex justify-content-between align-items-center btn btn-outline-secondary btn-sm dropdown-toggle mb-2 mb-md-0 position-relative"
                                            type="button"
                                            id="countryDropdown"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {(selectedCountry.length > 12) ? (selectedCountry.substr(0, 8) + ' ...') : selectedCountry}
                                        </div>
                                        <div className="dropdown-menu shadow-none p-2 contListContainer" aria-labelledby="countryDropdown">
                                            <div className="input-group rounded">
                                                <input
                                                    type="search"
                                                    className="form-control rounded shadow-none"
                                                    placeholder="Search"
                                                    aria-label="Search"
                                                    aria-describedby="search-addon"
                                                    onChange={handleCountryInputChange}
                                                    value={countrySearchInput}
                                                />
                                                <span className="input-group-text border-0" id="search-addon">
                                                    <i className="fas fa-search"></i>
                                                </span>
                                            </div>
                                            <div className="contList">
                                                {filteredCountries.length > 0 ? (
                                                    filteredCountries.map((country, index) => (
                                                        <div key={index}>
                                                            <div
                                                                className="dropdown-item"
                                                                onClick={() => handleCountryChange(country)}
                                                            >
                                                                {country.name}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div>
                                                        <span className="dropdown-item">No country available</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* City Dropmenu */}
                                    <div className="dropup shadow-none mb-0" style={{ width: "47%" }}>
                                        <div
                                            className="flex-fill overflow-hidden d-flex justify-content-between align-items-center btn btn-outline-secondary btn-sm dropdown-toggle mb-2 mb-md-0 position-relative"
                                            type="button"
                                            id="cityDropdown"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {(selectedCity.length > 12) ? (selectedCity.substr(0, 8) + ' ...') : selectedCity}
                                        </div>
                                        <div className="dropdown-menu shadow-none p-2 contListContainer" aria-labelledby="cityDropdown">
                                            <div className="input-group rounded">
                                                <input
                                                    type="search"
                                                    className="form-control rounded shadow-none"
                                                    placeholder="Search"
                                                    aria-label="Search"
                                                    aria-describedby="search-addon"
                                                    onChange={handleCityInputChange}
                                                    value={citySearchInput}
                                                />
                                                <span className="input-group-text border-0" id="search-addon">
                                                    <i className="fas fa-search"></i>
                                                </span>
                                            </div>
                                            <div className="contList">
                                                {filteredCities.length > 0 ? (
                                                    filteredCities.map((city, index) => (
                                                        <div key={index}>
                                                            <div
                                                                className="dropdown-item"
                                                                onClick={() => handleCityChange(city)}
                                                            >
                                                                {city.name}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div>
                                                        <span className="dropdown-item">No city available</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            aria-disabled="true"
                            className="btn btn-primary form-control form-control-sm p-0 mt-4 shadow-none"
                        >
                            Submit & Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm
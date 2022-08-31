import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsSearch, BsFillHeartFill, BsHouseDoorFill, BsFillBookFill, BsEnvelopeFill } from "react-icons/bs"
import { checkTokenLocal } from '../../services/localServices';



function ClientHeader(props) {
    let [login, setLogin] = useState("")
    let location = useLocation()
    let inputRef = useRef()
    let nav = useNavigate()

    useEffect(() => {
        setLogin(checkTokenLocal())
    }, [location])

    // work on every click on the keboard 
    const onKeboradClick = (e) => {
        if (e.key == "Enter") {
            onSearchClick();
        }
        // Everything you write without even clicking it presents
        // console.log(e.key);
    }

    const onSearchClick = () => {
        let input_val = inputRef.current.value;
        nav("/productsSearch?s=" + input_val)
    }
    return (
        <header className='shadow header-client container-fluid'>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className='logo col-md-auto mt-1'>
                        <Link to="/">
                            <h2>welcome</h2>
                        </Link>
                    </div>
                    <nav className='col-md-auto '>
                        <div className='d-md-flex align-items-center'>
                            <div className='links_header me-md-2 '>

                                <Link to="/articelsUser">מאמרים <BsFillBookFill className='d-none d-md-inline'></BsFillBookFill></Link>
                                <Link to="/products_favs">מועדפים <BsFillHeartFill className='d-none d-md-inline'></BsFillHeartFill></Link>
                                <Link to="/contact">לקביעת תור</Link>
                            </div>

                            <div className='log_in_out'>
                                {login ?
                                    <React.Fragment>
                                        <div className='d-flex '>
                                            <input onKeyDown={onKeboradClick} ref={inputRef} placeholder='              ...חפש' type="text" className='form-control' />
                                            <button onClick={onSearchClick} className='btnSearch btn btn-danger'><BsSearch className='icon1' /></button>

                                            <Link to="/logout" className='text-danger' >יציאה</Link>
                                        </div>
                                    </React.Fragment>

                                    :
                                    <React.Fragment>

                                        <Link to="login">כניסה</Link> /
                                        <Link to="signup">הרשמה</Link>

                                    </React.Fragment>

                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default ClientHeader
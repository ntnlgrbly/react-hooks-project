import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function LogoutAdmin(props) {
    let nav = useNavigate();

    useEffect(() => {
        localStorage.removeItem("tok");
        nav("/admin")
        toast.info("you log out from system ")
    }, [])

    return (
        <div> please wait... to log out.</div>
    )
}

export default LogoutAdmin
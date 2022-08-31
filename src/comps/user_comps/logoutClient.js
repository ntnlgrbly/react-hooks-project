import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AppContext } from "../../contecs/storeContect"
import { deleteToken } from '../../services/localServices'

function LogoutClient(props) {
    const { doFavApi } = useContext(AppContext)
    let nav = useNavigate();

    useEffect(() => {
        // log out user from system and sent to home
        deleteToken()
        toast.info("you looged out in system , see you soon")
        nav("/")
        doFavApi()
    }, [])
    return (
        <div></div>
    )
}

export default LogoutClient
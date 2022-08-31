import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { API_URL, doApiGet } from '../../services/apiService'
import { SHOP_TOKEN } from '../../services/localServices'


function AuthClientComp(props) {
    let nav = useNavigate()

    useEffect(() => {
        if (localStorage[SHOP_TOKEN]) {
            doApiAuth();
        } else {
            nav("/")
            toast.warning("you must be log in user to by here  ")
        }

    }, [])
    // check the token of user
    const doApiAuth = async () => {
        let url = API_URL + "/users/checkUserToken";
        try {
            let data = await doApiGet(url);
            console.log(data);
        } catch (err) {
            toast.warning("you need to log in again.")
            nav("/logout")
            console.log(err.response);
        }

    }
    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default AuthClientComp
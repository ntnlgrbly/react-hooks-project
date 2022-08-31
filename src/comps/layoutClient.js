import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ClientFooter from './general_comps/clientFooter';
import ClientHeader from './general_comps/clientHeader';
import { AppContext } from "../contecs/storeContect";
import { API_URL, doApiGet, doApiMethod } from '../services/apiService';
import { toast } from 'react-toastify';
import "./css/client.css"
import "./css/headerFooter.css"


function LayoutClient(props) {
    const [favs_ar, setFavs_ar] = useState([])

    useEffect(() => {
        doFavApi()
    }, [])

    const doFavApi = async () => {
        if (localStorage["tok"]) {
            let url = API_URL + "/favs/"
            try {
                let resp = await doApiGet(url);
                console.log(resp.data);
                if (resp.data.favs_ar) {
                    setFavs_ar(resp.data.favs_ar);
                }
            }
            catch (err) {

                console.log(err.response);
            }
        }
        else {
            // if user logged in will erase all favorite in the
            setFavs_ar([])
        }
    }
    // add or remove
    const addRemoveFav = async (_short_id) => {
        if (localStorage["tok"]) {
            let url = API_URL + "/favs/add_remove/" + _short_id;
            try {
                let resp = await doApiMethod(url, "PATCH", {})
                if (resp.data.modifiedCount) {
                    doFavApi()
                }
            }
            catch (err) {
                console.log(err.response);
                toast.info("There error try agin leter")
            }
        }
    }
    return (
        <AppContext.Provider value={{ favs_ar, addRemoveFav, doFavApi }}>
            <ClientHeader />
            <Outlet />
            <ClientFooter />
        </AppContext.Provider>
    )
}

export default LayoutClient
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { API_URL, doApiGet } from '../services/apiService';
import ProductItem from './productItem';


function SerachProducts(props) {
    const [ar, setAr] = useState([])
    const [whatSearch, setWhatSearch] = useState("")
    // if have products or if not have
    const [showLoading, setShowLodaing] = useState(true)
    let location = useLocation();
    useEffect(() => {
        setShowLodaing(true)
        doApi()
    }, [location])

    const doApi = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let searchQuery = urlParams.get("s") || "";
        setWhatSearch(searchQuery)
        let url = API_URL + "/products/search?s=" + searchQuery;
        let resp = await doApiGet(url)
        console.log(resp.data);
        setShowLodaing(false);
        setAr(resp.data)

    }
    return (
        <div className='container-fluid pb-4' style={{ minHeight: "85vh" }}>
            <div className="container">
                <h1 className='text-center my-4'>search for "{whatSearch}":</h1>
                {showLoading ? <h2 className='text-center'>Loading...</h2> : ""}
                {ar.length == 0 ? <h2 className='text-center'>Search not match, try another query</h2> : ""}
                <div className="row">
                    {ar.map(item => {
                        return (
                            <ProductItem key={item._id} item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SerachProducts
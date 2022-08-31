import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet } from '../../services/apiService'
import ProductItem from '../productItem'
import AuthClientComp from './authClientComp'
import "../css/pavs.css"
function FavsProduct(props) {
    let [ar, setAr] = useState([])
    useEffect(() => {
        doApiListFav()
    }, [])

    const doApiListFav = async () => {
        let url = API_URL + "/favs/productsInfo";
        let resp = await doApiGet(url)
        console.log(resp.data);
        setAr(resp.data)
    }

    return (
        <div style={{ backgroundImage: "url(/images/love.jpg)" }} className='strip_articels container-fluid d-flex align-item-center'>
            <div className='container-fluid' style={{ minHeight: "85vh" }}>

                <div className='container'>
                    <AuthClientComp />
                    <h1 className='text-center h2F mt-2'>list or product thet you add to fav</h1>
                    <h4 className='text-center h2F'>click on star to remove then from the list</h4>
                    {ar.length === 0 ? <h2 className='text-center'>Loading...</h2> : ""}
                    <div className='row'>
                        {ar.map(item => {
                            return (
                                <ProductItem key={item._id} item={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavsProduct
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL, doApiGet } from '../services/apiService'
import ProductItem from './productItem'


function InfoProductsList(props) {
    let [ar, setAr] = useState([])
    let params = useParams()

    useEffect(() => {
        doApi()
    }, [])

    const doApi = async () => {
        let url = API_URL + "/products?perPage=5&cat=" + props.cat_short_id;
        let resp = await doApiGet(url);
        console.log(resp.data);
        let temp_ar = resp.data;
        temp_ar = temp_ar.filter(item => {
            return item._id != params.id;
        })
        if (temp_ar.length > 4) {
            temp_ar.pop()
        }
        // cehck if product in product page  dont show agin in the list
        setAr(temp_ar);
    }

    return (
        <div className='my-5'>
            <h2 className='text-center'> מאמרים חדשים באתר</h2>

            <div className='row'>
                {ar.map(item => {
                    return (
                        <ProductItem key={item._id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default InfoProductsList
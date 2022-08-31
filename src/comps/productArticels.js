import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet } from '../services/apiService';
import { checkVisitedLocal, VISITED_PRODUCT } from '../services/localServices';

import ProductItem from './productItem';


function ProductArticels(props) {
    let [ar, setAr] = useState([])

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        // check if there products saved in the local that user visited in
        let vistedProds = checkVisitedLocal();
        let url;
        if (vistedProds) {
            url = API_URL + "/products/visited?visited=" + vistedProds;
        }
        else {
            url = API_URL + "/products?perPage=4";
        }
        let resp = await doApiGet(url);
        console.log(resp.data);
        setAr(resp.data);
    }

    return (

        <div className='container p-4 '>

            {localStorage[VISITED_PRODUCT] ?
                <h2 className='text-center text-info h2_product mb-3'>מאמרים שצפיתה בהם </h2> :
                <h2 className='text-center mt-2 h2_product mb-3'>מאמרים חדשים באתר</h2>
            }
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

export default ProductArticels
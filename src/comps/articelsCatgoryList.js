import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet } from "../services/apiService"
import { Link } from 'react-router-dom';

function ArticelsCatgoryList(props) {
    const [ar, SetAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        let url = API_URL + "/categories";
        let resp = await doApiGet(url)
        // console.log(resp.data);
        SetAr(resp.data);
    }
    return (
        // <div style={{ backgroundImage: "url(/images/sea.jpg)" }} className='strip container-fluid d-flex align-item-center'>
        <div className='container-fluid shadow box '>

            <div className='container py-4 categories_list'>
                <h2 className='text-center'>קטגוריות של מאמרים באתר</h2>
                <div className='row'>
                    {ar.map(item => {
                        return (
                            <Link to={"/products/" + item.url_name} key={item._id} className='myCard col-md-4 p-3  '>
                                <div className='shadow bg-dark text-white'>
                                    {/* check if there bg image */}

                                    <div style={{ backgroundImage: `url(${item.img_url || "/images/imgBox.jpg"})` }} className='img_card'></div>


                                    <h3 className='p-2 mx-auto text-center '>{item.name}</h3>
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
        </div>
        // </div>
    )
}

export default ArticelsCatgoryList
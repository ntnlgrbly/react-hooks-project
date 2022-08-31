import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { API_URL, doApiGet } from '../services/apiService'
import { addProdVisitedToLocal } from '../services/localServices';
import InfoProductsList from './infoProductsList';
import "./css/productInfo.css"
function ProductInfo(props) {
    const [product, setProduct] = useState({})
    let params = useParams();
    let nav = useNavigate();
    let location = useLocation()


    useEffect(() => {

        doApi();
    }, [location])

    const doApi = async () => {
        let url = API_URL + "/products/single/" + params.id;
        let resp = await doApiGet(url);
        console.log(resp.data);
        setProduct(resp.data)
        //  save in visited in local
        addProdVisitedToLocal(resp.data.short_id)
    }
    return (
        <div className='container' style={{ minHeight: "85vh" }}>
            <div className='row mt-5'>
                <div className='col-md-3 '>
                    {/* img-fluid - real width of pics or width 100%  */}
                    <img src={product.img_url} alt={product.name} className='img-fluid img-tumbnall shadow ' />
                </div>
                <div className='col-md-8 mx-auto'>
                    <div className='h3_info text-center mt-1' > {product.title}</div>
                    <div className='div_text text-center'>{product.text}</div>
                    <button onClick={() => {
                        nav(-1);
                    }} className={'btn btn-dark mt-2 float-end'}>חזור</button>
                </div>
            </div>
            {product.cat_short_id ?
                <InfoProductsList cat_short_id={product.cat_short_id} />
                : ""}
        </div>
    )
}

export default ProductInfo
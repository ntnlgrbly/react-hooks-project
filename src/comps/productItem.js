import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BsStar, BsStarFill } from "react-icons/bs"
import { AppContext } from '../contecs/storeContect';

function ProductItem(props) {
    let item = props.item;
    let { favs_ar, addRemoveFav } = useContext(AppContext)
    return (
        <div className='product-item col-md-3 p-2'>
            <div className='shadow'>
                <div style={{ backgroundImage: `url(${item.img_url || "/images/logo512.png"})` }} className='product-img'></div>
                <div className='p-2'>
                    <h2 className='h2 text-end'>{item.title}</h2>
                    <div className='text-end h2i'> מאת: {item.name}</div>
                    <div className='text-cnter my-2'>
                        {favs_ar.includes(item.short_id) ?
                            <button onClick={() => {
                                addRemoveFav(item.short_id)
                            }} className='btn btn-warning w-25'>
                                <BsStarFill className='mb-1 ' />
                            </button> :
                            <button onClick={() => {
                                addRemoveFav(item.short_id)
                            }} className='btn btn-white '>
                                <BsStar className='mb-1' />
                            </button>
                        }
                        <Link className='btn btn-dark w-50 ms-2 ' to={"/productInfo/" + item._id}>למאמר</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
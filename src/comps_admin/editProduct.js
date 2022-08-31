import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthAdminComp from '../misc_comps/authAdminComp'
import { API_URL, doApiGet, doApiMethod } from '../services/apiService'


function EditProduct(props) {
    let [cat_ar, setCatAr] = useState([]);
    let [product, setProduct] = useState({});
    let params = useParams();

    let nav = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm();

    let nameRef = register("name", { required: true, minLength: 2, maxLength: 150 })
    let infoRef = register("info", { required: true, minLength: 2, maxLength: 500 })
    let titleRef = register("title", { required: true, minLength: 2, maxLength: 150 })
    let textRef = register("text", { required: true, minLength: 2, maxLength: 11150 })
    let cat_short_idRef = register("cat_short_id", { required: true, minLength: 1, maxLength: 99 })
    let img_urlRef = register("img_url", { required: false, minLength: 3, maxLength: 500 })


    useEffect(() => {
        doApi()
    }, [])

    // get the catgories for select box
    const doApi = async () => {
        let url = API_URL + "/categories";
        let resp = await doApiGet(url);
        // console.log(resp.data);
        setCatAr(resp.data);
        // get product props from api 
        let urlProduct = API_URL + "/products/single/" + params.id;
        let resp2 = await doApiGet(urlProduct);
        console.log(resp2.data)
        setProduct(resp2.data);
    }


    const onSubForm = (formData) => {
        // console.log(formData);
        doFormApi(formData);
    }
    const doFormApi = async (formData) => {
        let url = API_URL + "/products/" + params.id;
        try {
            let resp = await doApiMethod(url, "PUT", formData);
            // console.log(resp.data);
            if (resp.data.modifiedCount) {
                toast.info("Product updated");
                // back to the list of products in the admin panel
                nav("/admin/products")
            }
            else {
                toast.warning("You not change nothing for update")
            }
        }
        catch (err) {
            console.log(err.response);
            alert("There problem try again later")
        }
    }

    return (
        <div className='continer'>
            <AuthAdminComp />
            <h1 className='text-center mt-3'>עדכון מאמר</h1>
            {(product._id) ?
                <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 mx-auto p-3 shadow mt-4'>
                    <div className='text-end textProduct'>
                        <label>:שם המטפל</label>
                        <input {...nameRef} type="text" className='form-control' />
                        {errors.name ? <small className='text-danger d-block'>* Enter valid name 2 to 99</small> : ""}

                        <label>:כותרת</label>
                        <input {...titleRef} type="text" className='form-control' />
                        {errors.title ? <small className='text-danger d-block'>* Enter valid title 2 to 299</small> : ""}

                        <label>:המאמר</label>
                        <textarea {...textRef} className='form-control' rows="3"></textarea>
                        {errors.text ? <small className='text-danger d-block'>* Enter valid text 2 to 5899</small> : ""}


                        <label>:הקטגוריה </label>
                        <select {...cat_short_idRef} className='form-select'>
                            <option className='text-center' value="" >בחר קטגוריה </option>
                            {cat_ar.map(item => {
                                return (
                                    <option key={item._id} value={item.short_id}>{item.name}</option>
                                )
                            })}</select>
                        {errors.cat_short_id ? <small className='text-danger d-block'>* Choose one categore </small> : ""}
                        <label>:הוסף תמונה</label>
                        <input {...img_urlRef} type="text" className='form-control' />
                    </div>

                    <button className='btn btn-info mt-2 mx-1 '>Add new product</button>
                    <Link className='btn btn-danger mt-2' to="/admin/products">Canel</Link>
                </form> : <h2 className='text-center mt-4'>Loading...</h2>}
        </div>
    )
}

export default EditProduct
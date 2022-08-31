import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthAdminComp from '../misc_comps/authAdminComp'
import { API_URL, doApiGet, doApiMethod } from '../services/apiService'

function AddProduct(props) {
    let [cat_ar, setCatAr] = useState([]);
    let [btnSent, setBtnSent] = useState(false);
    let nav = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm();

    let nameRef = register("name", { required: true, minLengt: 2, maxLength: 99 })
    let titleRef = register("title", { required: true, minLengt: 2, maxLength: 299 })
    let textRef = register("text", { required: true, minLengt: 2, maxLength: 5399 })
    let cat_short_idRef = register("cat_short_id", { required: false, minLengt: 2, maxLength: 99 })
    let img_urlRef = register("img_url", { required: true, minLengt: 2, maxLength: 600 })


    useEffect(() => {
        doApi()
    }, [])
    const doApi = async () => {
        let url = API_URL + "/categories";
        let resp = await doApiGet(url);
        console.log(resp.data);
        setCatAr(resp.data);
    }
    const onSubForm = (formData) => {
        console.log(formData);
        setBtnSent(true);
        doFormApi(formData);
    }

    const doFormApi = async (formData) => {
        let url = API_URL + "/products";
        try {
            let resp = await doApiMethod(url, "POST", formData);
            console.log(resp.data);
            if (resp.data._id) {
                toast.success("product added")

                nav("/admin/products")
            }
        }
        catch (err) {
            console.log(err.response);
            alert("There problem try again leter")
            nav("/admin/products")
        }
    }
    return (
        <div className='container'>
            <AuthAdminComp />
            <h1 className='text-center mt-2'>הוסף מאמר חדש</h1>
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
                {errors.img_url ? <small className='text-danger d-block'>* Enter valid img_url </small> : ""}
                <button disabled={btnSent} className='btn btn-info mt-2'>Add new product</button>
            </form>
        </div>
    )
}

export default AddProduct
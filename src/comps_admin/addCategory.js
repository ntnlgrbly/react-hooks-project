import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthAdminComp from '../misc_comps/authAdminComp'
import { API_URL, doApiMethod } from '../services/apiService'

function AddCategory(props) {

    let [btnSend, setBtnSend] = useState(false);

    let nav = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm();

    let nameRef = register("name", { required: true, minLengt: 2, maxLength: 99 })
    let url_nameRef = register("url_name", { required: true, minLengt: 2, maxLength: 200 })
    let img_urlRef = register("img_url", { required: true, minLengt: 2, maxLength: 250 })

    const onSubForm = (formData) => {
        // console.log(formData);
        setBtnSend(true);
        doFormApi(formData);
    }

    const doFormApi = async (formData) => {
        let url = API_URL + "/categories";
        try {
            let resp = await doApiMethod(url, "POST", formData);
            console.log(resp.data);
            if (resp.data._id) {
                toast.success("Categories added");
                nav("/admin/categories")
            }
        }
        catch (err) {
            console.log(err.response);
            alert("There problem try again leter")
            nav("/admin/categories")
        }
    }
    return (
        <div className='container'>
            <AuthAdminComp />
            <h1>Add new product</h1>
            <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
                <label>Name:</label>
                <input {...nameRef} type="text" className='form-control' />
                {errors.name ? <small className='text-danger d-block'>* Enter valid name 2 to 99</small> : ""}
                <label>url name:</label>
                <input {...url_nameRef} type="text" className='form-control' />
                {errors.url_nameRef ? <small className='text-danger d-block'>* Enter valid url_name 2 to 200</small> : ""}
                <label>Img url</label>
                <input {...img_urlRef} type="text" className='form-control' />
                {errors.img_url ? <small className='text-danger d-block'>* you need to add img_url 2 to 450</small> : ""}

                <button className='mt-4 btn btn-info' disabled={btnSend}> Add new category</button>
            </form>
        </div>
    )
}

export default AddCategory
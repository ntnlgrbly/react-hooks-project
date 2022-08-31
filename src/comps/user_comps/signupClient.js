import React from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL, doApiMethod } from '../../services/apiService';

function SignupClient(props) {
    let nav = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm();

    const onSubForm = (data) => {
        console.log(data);
        doApi(data)

    }
    const doApi = async (_dataBody) => {
        let url = API_URL + "/users/";
        try {
            let resp = await doApiMethod(url, "POST", _dataBody);
            if (resp.data._id) {
                toast.success("you login");
                nav("/articelsUser");
            }
        }
        catch (err) {
            if (err.response.data.code == 11000) {
                toast.error("Email already in system , try log in")
            }
            else {
                alert("There problem , try come back later")
            }
            // if(err.responose.code == 11000){
            // }
            // console.log(err)
        }
    }

    let nameRef = register("name", { required: true, minLength: 2 });
    let emailRef = register("email", {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    })
    let passwordRef = register("password", { required: true, minLength: 3 });
    let addressRef = register("address", { required: true, minLength: 2 });
    let phoneRef = register("phone", { required: true, minLength: 2 });

    return (
        <div style={{ backgroundImage: "url(/images/black.png)" }} className='stripMain d-flex align-item-center'>
            <div className='container col-md-6 mx-auto my-5'>
                <h1 className='text-center mb-3 h1_signup'> Sign up to system</h1>
                <form onSubmit={handleSubmit(onSubForm)} className='col-12 p-3 border'>
                    <label className='label'>Name</label>
                    <input {...nameRef} type='text' className='form-control' />
                    {errors.name ? <small className='text-danger d-block'>* Name invalid </small> : ""}
                    <label className='label'>Email</label>
                    <input {...emailRef} type='text' className='form-control' />
                    {errors.email ? <small className='text-danger d-block'>* Email invalid </small> : ""}
                    <label className='label'>Password:</label>
                    <input {...passwordRef} type='text' className='form-control' />
                    {errors.password ? <small className='text-danger d-block'>* Enter  Password invalid you need min 3 chars</small> : ""}
                    <label className='label'>Address:</label>
                    <input {...addressRef} type='text' className='form-control' />
                    {errors.address ? <small className='text-danger d-block'>* Enter  Address invalid you need min 3 chars</small> : ""}
                    <label className='label'>Phone:</label>
                    <input {...phoneRef} type='text' className='form-control' />
                    {errors.phone ? <small className='text-danger d-block'>* Enter  phone number invalid you need min 3 chars</small> : ""}
                    <button className='btn btn-info mt-4'>Sogin up</button>
                </form>
            </div>
        </div>
    )
}

export default SignupClient
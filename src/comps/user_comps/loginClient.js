import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL, doApiMethod } from '../../services/apiService';
import { saveTokenLocal } from '../../services/localServices';
import { AppContext } from "../../contecs/storeContect"


function LoginClient(props) {
  const { doFavApi } = useContext(AppContext)

  let nav = useNavigate()
  let { register, handleSubmit, formState: { errors } } = useForm();

  const onSubForm = (data) => {
    console.log(data);
    doApi(data)

  }
  const doApi = async (_dataBody) => {
    let url = API_URL + "/users/login";
    try {
      let resp = await doApiMethod(url, "POST", _dataBody);
      if (resp.data.token) {
        toast.success("you login");
        saveTokenLocal(resp.data.token);
        nav("/")
        doFavApi();
      }

    }
    // the catch err  not work good the alert not true
    // this problem is fixed
    catch (err) {

      alert("there problem , try again leter")
      // console.log(err)

    }
  }

  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  })

  let passwordRef = register("password", { required: true, minLength: 3 });
  return (
    <div className='container col-md-6 mx-auto my-5'>
      <h1 className='text-center mb-3'>log in to system</h1>
      <form onSubmit={handleSubmit(onSubForm)} className='col-12 p-3 border'>

        <label>Email</label>
        <input {...emailRef} type='text' className='form-control' />
        {errors.email ? <small className='text-danger d-block'>* Email invalid </small> : ""}
        <label>Password:</label>
        <input {...passwordRef} type='text' className='form-control' />
        {errors.password ? <small className='text-danger d-block'>* Enter  Password invalid you need min 3 chars</small> : ""}
        <button className='btn btn-info mt-4'>login</button>
      </form>
    </div>
  )
}

export default LoginClient
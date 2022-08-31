import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthAdminComp from '../misc_comps/authAdminComp';
import PageLinks from '../misc_comps/pageLinks';
import { API_URL, doApiGet, doApiMethod } from '../services/apiService';


function ProductAdminList(props) {
    let [ar, setAr] = useState([]);
    let [numPage, setPageNum] = useState(1)
    let [catObj, setCatObj] = useState({})
    let nav = useNavigate();
    let location = useLocation()


    useEffect(() => {

        doApi();
    }, [location])

    const doApi = async () => {
        // get the product list from server api


        try {
            let url0 = API_URL + "/categories";
            let resp0 = await doApiGet(url0);
            console.log(resp0.data);
            let temp_ar = resp0.data;
            // var that will assoiative array with short_id that equal
            // to the category name categories_data["97548"] -> cars
            let categories_data = {};
            temp_ar.forEach(item => {
                categories_data[item.short_id] = item.name;
            })
            setCatObj(categories_data)
            const urlParams = new URLSearchParams(window.location.search);
            let pageQuery = urlParams.get("page") || 1;
            setPageNum(pageQuery);
            let url = API_URL + "/products?page=" + pageQuery;
            let resp = await doApiGet(url);
            // console.log(resp.data);
            setAr(resp.data);
        }
        catch (err) {
            alert("there problem come back later")
            if (err.response) {
                console.log(err.response.data)
            }
        }
    }

    const delProduct = async (_idDel) => {
        if (window.confirm("Are you sure you want to delete?")) {
            try {
                let url = API_URL + "/products/" + _idDel;
                let resp = await doApiMethod(url, "DELETE", {});
                console.log(resp.data);
                if (resp.data.deletedCount) {
                    toast.info("product delted !");
                }
                // for show the new list without the product that we deleted
                doApi();
            }
            catch (err) {
                console.log(err.response);
                alert("there problem , try again later")
            }
        }
    }

    return (
        <div className='container'>
            <AuthAdminComp />
            <h1>List of articles in system</h1>

            <Link to="/admin/addProduct" className="btn btn-success">Add new product</Link>
            {/* cls = className for css */}
            <PageLinks perPage="5" apiUrlAmount={API_URL + "/products/amount"} urlLinkTo={"/admin/products"} clsCss="btn btn-dark me-1" />

            <table className='table table-responsive'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"># </th>
                        <th scope="col">name</th>
                        <th scope="col">title </th>
                        <th scope="col">short_id </th>
                        <th scope="col">text </th>
                        <th scope="col">cat short_id </th>
                        <th scope="col">del/edit </th>
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        return (
                            <tr key={item._id}>
                                <th scope="row"></th>
                                <td>{(i + 1) + 5 * (numPage - 1)}</td>
                                <td>{item.name}</td>
                                <td>{item.title}</td>
                                <td>{item.short_id}</td>
                                <td>{item.text}</td>
                                <td>{catObj[item.cat_short_id]}</td>

                                <td>
                                    <button onClick={() => delProduct(item._id)} className='badge bg-danger mt-1'>x</button>
                                    <button onClick={() => { nav("/admin/editProduct/" + item._id) }} className='badge bg-info'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {ar.length === 0 ? <h2>Loading ...</h2> : ""}

        </div>
    )
}

export default ProductAdminList
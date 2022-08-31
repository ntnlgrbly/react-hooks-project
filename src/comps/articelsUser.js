import React from 'react'

import ArticelsCatgoryList from './articelsCatgoryList'
import ArticlsStrip from './articelsStrip'
import "./css/articelsUser.css"
import ProductArticels from './productArticels'
import AuthClientComp from './user_comps/authClientComp'


function ArticelsUser(props) {


    return (

        <React.Fragment>
            {/* check if the user log in in system */}
            <AuthClientComp />
            {/* no need i use img in articels */}
            {/* <ArticlsStrip /> */}
            <ArticelsCatgoryList />
            <ProductArticels />

        </React.Fragment>

    )
}

export default ArticelsUser
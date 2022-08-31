import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function ClientFooter(props) {
    return (
        <footer className='footer-client  container-fluid bg-dark text-white'>
            <div className='container text-center'>
                All right reserved to natan <AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>
            </div>
        </footer>
    )
}

export default ClientFooter
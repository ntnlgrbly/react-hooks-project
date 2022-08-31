import React from 'react'
import "../css/homeStrip.css"

function HomeStrip(props) {
    setTimeout(() => {
        alert("הרשם אלינו וקבל גישה לכול המאמרים ההרשמה חינם! ")
        // if (window.confirm("הירשם אילנו וקבל הטבות ההרשמה חינם")) {
        //     nav("/")
        // }
    }, 20000);

    return (





        <div style={{ backgroundImage: "url(/images/img5.jpg)" }} className='strip_home container-fluid d-flex align-item-center'>
            <div className='container text-center'>
                <h2 className='text-center mt-4'>ברוכים הבאים לקליניקה שלנו </h2>
                <h3 className='mt-3'> מומחים לטיפול רגשי/זוגי</h3>
            </div>

        </div>

    );
}


export default HomeStrip
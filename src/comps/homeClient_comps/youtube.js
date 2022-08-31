import React from 'react'


function Youtube(props) {
    return (


        <div className='slider_youtube' style={{ backgroundImage: "url(/images/youtube.png)" }}>

            <h2 className='h2L d-none d-md-inline '>סרטונים של המטפלים שלנו</h2>
            <div className='youtaube container-fluid  ' data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"  >
                <iframe src="https://www.youtube.com/embed/ZVJwgHjlPUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                <iframe src="https://www.youtube.com/embed/LB4I-qQGewM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <iframe src="https://www.youtube.com/embed/YLqL1eMOYb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <iframe src="https://www.youtube.com/embed/BUBe-J7TA2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/jgdpN34ZuEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/OwCIApR_Rfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >

        </div>

    )
}

export default Youtube
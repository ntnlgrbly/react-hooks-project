import React, { Component } from 'react'
import "../../comps/css/about.css"
import { FcAbout, IoCall } from "react-icons/fc";
import { data_ar } from '../../data/data';




class About extends Component {
    state = { data_arr: data_ar }


    render() {
        return (
            <div className='container-fluid about'>
                <h2 className='text-center hc mt-2'> <FcAbout></FcAbout>המטפלים שלנו</h2>
                <div className='row'>
                    {this.state.data_arr.map(item => {
                        return (
                            <div data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-easing="ease-in-sine" className='dataArr  container-fluid col-md-2 mx-auto border mt-2'>
                                <img className='mt-2' src={item.img} height={"140px"} width={"160px"} />
                                <h2 className='t-about text-end font_about'>{item.name}</h2>
                                <div className='t-about  font_about' >{item.kind}: סוג מטפל</div>
                                <div className='t-about  font_about'>{item.city}: עיר</div>
                                <div className='t-about  font_about'>{item.discrption}: תיאור</div>
                                <div className='t-about  font_about'>discrption:{item.Certificates}: תארים</div>

                            </div>



                        )
                    })}
                    {/* <div className='col-lg-4 border'>
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" height={"170px"}
                                width={"160px"} />
                            <h2 className='text-center'>zion</h2>
                            <div>kind </div>
                            <div>city </div>
                            <div>discrption </div>
                            <div>discrption </div>

                        </div> */}
                </div>
            </div>

        )
    }
}

export default About

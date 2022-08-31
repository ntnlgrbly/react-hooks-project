import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
// import { Icon } from "leaflet";
// const myIcon = new Icon({
//     iconUrl: "/images/icon_pizza.png",
//     iconSize: [30, 45],
//     iconAnchor: [15, 45],
//     popupAnchor: [0, -40],
//     tooltipAnchor: [0, -20]
// })

export default function MapHome() {
    return (
        <div>
            <h2 className='text-center mt-4'>תמונות ומיקום הקליניקה</h2>

            <div className=' stripMain mt-5 shadow box '>

                <div className=' box-mainPic '>
                    <div iv className=' boxs-mainPic  row rows-cols-3 gap-2'>
                        {/* <h2>אשלה על התהליך הטיפולי. זאת משום שבמצבים בהם האבחנה שגויה הגורם האמיתי לא מקבל מענה טיפולי והוא י. זאת משום שבמצבים בהם האבחנה שגויה הגורם האמיתי לא מקבל מענה טיפולי והוא עלול להחמיר אשלה על התהליך הטיפולי. זאת משום שבמצבים בהם האבחנה שגויה הגורם האמיתי לא מקבל מענה טיפולי והוא עלול להחמיר את מצבו של האדם. כמו כן, המשאבים הכרוכים במתן טיפול לא מתאים מבוזבזים לריק ואינם מובילים לשיפור במצבו של האדם. במקרים חמורים יותר, טיפול שגוי יכול אף לגרום z</h2> */}
                        <img className='img_pic col-4' src='images/clinic1.jpg' ></img>
                        <img className='img_pic col-4' src='images/clinic2.jpg'  ></img>
                        <img className='img_pic col-4' src='images/clinic3.jpg' ></img>
                        <img className='img_pic col-4' src='images/pic_Q.jpg' ></img>
                        <img className='img_pic col-4' src='images/pic_Q1.jpg' ></img>
                        <img className='img_pic col-4' src='images/pic_Q2.jpg' ></img>

                    </div>
                    <div className='me-6 boxs-mainPic'>

                        <MapContainer center={[32.0336947954732, 34.76662251403841]} zoom={17} scrollWheelZoom={true}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {/* <Marker eventHandlers={{
                    click: (e) => {
                        alert("even gvirol 10")
                    }
                }} position={[32.0336947954732, 34.76662251403841]} icon={myIcon}> */}
                            {/* <Popup>
                        <a href='https://google.co.il' target="_blank">
                            המצודה 26 חולון
                        </a>
                    </Popup> */}
                            {/* <Tooltip>
                        טול טיפ במעבר עכבר
                    </Tooltip> */}
                            {/* </Marker> */}
                            <Marker position={[32.0336947954732, 34.76662251403841]}>
                                <Popup> בית כורש קומה 2 רחוב המצודה 1 חולון</Popup>
                            </Marker>
                        </MapContainer >
                    </div>

                </div>

            </div >

        </div >
    )
}

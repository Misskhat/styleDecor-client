import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FaLocationDot } from "react-icons/fa6"
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import 'leaflet/dist/leaflet.css'

const AboutUs = () => {
    const position = [23.8041, 90.4152]
    return (
        <div className='w-11/12 mx-auto '>
            <h2 className='text-3xl font-bold mt-5'>About Us</h2>
            <p className='opacity-85'>Whether you have a question about our features, service pricing or anything else our team is ready to answer all your questions.</p>
            <div className='flex gap-5 py-5'>
                <div className='flex-1 space-y-2'>
                    <div className='flex items-center gap-2 text-blue-950'><FaLocationDot /> 10, Nikunja - 2, Khilkhet, Dhaka – 1229</div>
                    <div className='flex items-center gap-2 text-blue-950'><FaMobileButton /> Call: +8801754-804496</div>
                    <div className='flex items-center gap-2 text-blue-950'><MdEmail /> Mail: misskhat.hossen@gmail.com</div>
                    <form>
                        <fieldset className='fieldset'>
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                        </fieldset>
                    </form>
                </div>
                <div className='w-full h-96 rounded flex-2'>
                    <MapContainer className='w-full h-96' center={position} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                StyleDecor <br /> Dhaka, Bangladesh.
                            </Popup>
                        </Marker>
                    </MapContainer>,
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
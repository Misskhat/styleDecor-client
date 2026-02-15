import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FaLocationDot } from "react-icons/fa6"
import { FaMobileButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import 'leaflet/dist/leaflet.css'

const AboutUs = () => {
    const position = [23.8041, 90.4152]
    return (
        <div className='w-11/12 mx-auto space-y-3 my-5'>
            <h2 className='text-3xl font-bold mt-5'>About Us</h2>
            <p className='opacity-85'>
                <span className='font-bold'>Mission:</span> Our mission at CCL Interior Design is to create captivating spaces that harmonize functionality, aesthetics, and sustainability. We strive to provide innovative design solutions that enhance the lives of our clients and enrich their living and working environments.
            </p>
            <p className="opacity-85">

                <span className='font-bold'>Vision:</span> Driven by creativity and a passion for design excellence, our vision is to become the premier interior design firm in Bangladesh, setting new benchmarks in the industry through our innovative concepts and unwavering commitment to customer satisfaction.
            </p>
            <p className="opacity-85">

                <span className='font-bold'>Services Offered:</span> At CCL Interior Design, we offer a diverse range of interior design services, tailored to meet the unique needs of each client.
            </p>
            <p className="opacity-85">

                <span className='font-bold'>Residential Interior Design:</span> From luxurious apartments to modern homes and duplexes, we create personalized spaces that reflect the client’s lifestyle and taste. Corporate Interior Design: We design functional and inspiring workspaces, offices, showrooms, and lobbies that foster productivity and leave a lasting impression on clients and visitors. Hospitality Interior Design: Our team specializes in crafting inviting interiors for hotels, resorts, restaurants, and other hospitality establishments, blending aesthetics with a focus on guest comfort.
            </p>
            <p className="opacity-85">

                <span className='font-bold'>Landscape Design:</span> We extend our creative vision to the outdoors, designing enchanting gardens and landscapes that complement the surrounding architecture. Hospital and Clinic Interiors: With a keen eye on patient well-being, we create soothing and efficient healthcare interiors, including hospitals, clinics, and medical facilities.
            </p>
            <p className="opacity-85">

                <span className='font-bold'>Core Values:</span> At the heart of our operations are our core values, which guide every decision we make:Creativity: We foster a culture of innovation and creativity, constantly exploring new ideas to deliver cutting-edge designs.
            </p>
            <p className="opacity-85">

                <span className="font-bold">Quality:</span> Our commitment to delivering high-quality work is unwavering, ensuring that every project meets the highest industry standards. Sustainability: Caring for the environment is integral to our design philosophy, and we strive to incorporate eco-friendly practices into every project. Client-Centric Approach: We prioritize our clients’ needs, collaborating closely with them to understand their aspirations and deliver designs that exceed their expectations.
            </p>
            <p className="opacity-85">

                <span className="font-bold">Professionalism:</span> Our team comprises experienced and skilled designers, project managers, and craftsmen who execute every project with professionalism and attention to detail. With a rich portfolio of over 1579 successfully completed projects, including prestigious collaborations with renowned companies like Akij Group, Food Panda, Energy Pac, Galaxy Resort, Al Fatah Publication, OMC Group, PGR, and Korotoa Daily News, CCL
            </p>
            <p className="opacity-85">
                Interior Design stands as a symbol of excellence in the interior design industry in Bangladesh.
            </p>

        </div >
    );
};

export default AboutUs;
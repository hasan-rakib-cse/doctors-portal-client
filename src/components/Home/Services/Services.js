import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: "Fluoride Treatment",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        img: whitening
    }
];

const Services = () => {
    return (
        <section className='services-container mt-5 pt-3 mb-5 pb-5'>
            <div className='text-center'>
                <h5 style={{ color: "#1CC7C1" }}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-5 pt-3'>
                    {
                        serviceData.map((service, index) => <ServiceDetail key={index} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
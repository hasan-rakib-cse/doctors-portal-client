import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'United Kingdom, London',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+4499668110',
        icon: faPhone,
        background: 'primary'
    },
]

const BusinessInfo = () => {
  return (
    <section className='d-flex justify-content-center'>
        <div className='w-75 row'>
            {
                infosData.map((info, index) => <InfoCard key={index} info={info}></InfoCard>)
                // infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
            }
        </div>
    </section>
  )
}

export default BusinessInfo
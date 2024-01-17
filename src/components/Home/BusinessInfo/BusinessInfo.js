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
    <section className='row'>
        {
            infosData.map(info => <InfoCard info={info}></InfoCard>)
        }
    </section>
  )
}

export default BusinessInfo
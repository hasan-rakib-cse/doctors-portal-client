import React from 'react'
import Modal from 'react-modal';
import { useForm } from "react-hook-form"
import './AppointmentForm.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const { register, formState: { errors }, handleSubmit, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        closeModal()
    }

    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <h2 className='text-brand text-center mb-4'>{appointmentOn}</h2>
                <p className='text-secondary text-center'><small>ON {date.toDateString()}</small></p>

                <button className='modalCloseButton' onClick={closeModal}>X</button>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='form-group mb-3'>
                        <input {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} className='form-control' name='name' placeholder='Your Name' />
                        {errors.name?.type === "required" && (<span className='text-danger'>Name is required</span>)}
                    </div>
                    <div className='form-group mb-3'>
                        <input {...register("phone", { required: true })} aria-invalid={errors.phone ? "true" : "false"} className='form-control' name='phone' placeholder='Phone Number' />
                        {errors.phone?.type === "required" && (<span className='text-danger'>Phone Number is required</span>)}
                    </div>
                    <div className='form-group mb-3'>
                        <input {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} className='form-control' name='email' placeholder='Email Address' />
                        {errors.email?.type === "required" && (<span className='text-danger'>Email is required</span>)}
                    </div>


                    <div className='form-group mb-3 row'>
                        <div className="col-md-4">
                            <select {...register("gender", { required: true })} aria-invalid={errors.gender ? "true" : "false"} name="gender" className="form-select form-control select select-bordered w-full max-w-xs">
                                <option disabled={true} value="Not Set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not Set">Male</option>
                            </select>
                            {errors.gender?.type === "required" && (<span className='text-danger'>Gender is required</span>)}
                        </div>

                        <div className="col-md-4">
                            <input {...register("age", { required: true })} aria-invalid={errors.age ? "true" : "false"} className='form-control' name='age' placeholder='Your Age' />
                            {errors.age?.type === "required" && (<span className='text-danger'>Age is required</span>)}
                        </div>
                        
                        <div className="col-md-4">
                            <input {...register("weight", { required: true })} aria-invalid={errors.weight ? "true" : "false"} className='form-control' name='weight' placeholder='Your Weight' />
                            {errors.weight?.type === "required" && (<span className='text-danger'>Weight is required</span>)}
                        </div>
                    </div>

                    <div className='form-group mb-3 text-center'>
                        <button type="submit" className='btn btn-brand w-100' >Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AppointmentForm
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact my-5 py-5">
      <div className="container">

        <div className="section-header text-center text-white mb-5">
          <h5 style={{ color: "#1CC7C1" }}>Contact</h5>
          <h1>Always  connect with us</h1>
        </div>

        <div className="col-md-9 mx-auto">
          <form action="" className='d-flex flex-column gap-3'>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Email Address *" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject *" />
            </div>
            <div className="form-group">
              <textarea name="" className="form-control" id="" rows="10" placeholder="Message *"></textarea>
            </div>
            <div className="form-group text-center">
              <button style={{ background: "#1CC7C1" }} type="button" className="btn px-4 text-white"> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
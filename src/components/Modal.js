import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import {
  emailValidation,
  messageValidation,
  nameValidation,
  phoneNumberValidation,
} from './FormValidation';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '30%',
    transform: 'translate(-50%, -50%)',
    zIndex: '99999999999999999999999999',
    background: 'grey',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ContactModal({ modalOpen, setModalState }) {
  const { register, handleSubmit } = useForm();
  const [nameError, setNameError] = useState(false);
  const [phoneError, setphoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const onSubmit = async (data) => {
    setNameError(nameValidation(data.firstName));
    setphoneError(phoneNumberValidation(data.phoneNumber));
    setEmailError(emailValidation(data.email));
    setMessageError(messageValidation(data.message));

    console.log(data.firstName.length, data.firstName);
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={setModalState}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 id="contact-us-title" className="contact-us-title">
          Contact Us
        </h1>
        <button
          id="close-button"
          className="close-button"
          onClick={() => setModalState()}
        >
          X
        </button>

        <div className="ContactForm">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="contactForm">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label>First And Last Name</label>
                    <input {...register('firstName')} />
                    {nameError && <p className="error">{nameError}</p>}
                    <label>Phone Number</label>
                    <input type="number" {...register('phoneNumber')} />
                    {phoneError && <p className="error">{phoneError}</p>}
                    <label>Email Address</label>
                    <input type="email" {...register('email')} />
                    {emailError && <p className="error">{emailError}</p>}
                    <label>Message</label>

                    <textarea
                      rows="5"
                      cols="60"
                      name="description"
                      {...register('message')}
                    >
                      Enter details here.../
                    </textarea>
                    {messageError && <p className="error">{messageError}</p>}

                    <br></br>
                    <input type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ContactModal;

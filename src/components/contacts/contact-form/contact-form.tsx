import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import EmailInput from './contact-form-inputs/email-input';
import NameInput from './contact-form-inputs/name-input';
import TextInput from './contact-form-inputs/text-input';

import './cv-contact-form.css';

export type FormInputs = {
  name: string;
  email: string;
  text: string;
};

function ContactForm() {
  const [sendingSuccess, setSendingSuccess] = useState(false);
  const [sendingErr, setSendingErr] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState('Send');

  const handleEmailSend = (data: FormInputs) => {
    setSendingSuccess(false);
    setSendingErr(false);
    setSubmitBtnText('Sending...');

    try {
      emailjs.send('service_tfge3hj', 'template_loginamnet_cv', data, 'wcOP4ASeKBuPGJUkL');
      setSendingSuccess(true);
      setSubmitBtnText('Done!');
    } catch (error) {
      setSendingErr(true);
      setSubmitBtnText('Oops, some problems! Try again');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    const submitBtnTimer = setTimeout(() => {
      if (sendingSuccess || sendingErr) {
        setSubmitBtnText('Send');
        setSendingSuccess(false);
        setSendingErr(false);
      }
    }, 2500);

    return () => {
      clearTimeout(submitBtnTimer);
    };
  }, [sendingErr, sendingSuccess, submitBtnText]);

  return (
    <section className="section section-white">
      <div className="wrapper-small cv-contact-form">
        <h2 className="text-color-dark">Contact</h2>
        <form
          className="cv-form__inputs_box"
          onSubmit={handleSubmit((data) => {
            handleEmailSend(data);
            !sendingErr && reset();
          })}
        >
          <div className="inputs-box__name-email">
            <NameInput register={register} errors={errors} clearErrors={clearErrors} />
            <EmailInput register={register} errors={errors} clearErrors={clearErrors} />
          </div>
          <TextInput register={register} errors={errors} clearErrors={clearErrors} />
          <button
            className={
              sendingSuccess
                ? 'inputs-box__submit inputs-box__submit-success text-color-white'
                : sendingErr
                ? 'inputs-box__submit inputs-box__submit-error text-color-white'
                : 'inputs-box__submit text-color-white'
            }
            type="submit"
          >
            {submitBtnText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

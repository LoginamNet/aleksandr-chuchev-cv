import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import EmailInput from './contact-form-inputs/email-input';
import PhoneInput from './contact-form-inputs/phone-input';
import NameInput from './contact-form-inputs/name-input';
import TextInput from './contact-form-inputs/text-input';
import ButtonRounded from '../../buttons/button-rounded';

import './contact-form.css';

export type FormInputs = {
  name: string;
  email: string;
  phone: string;
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
    reValidateMode: 'onChange',
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
    <div className="contact-form">
      <span className="contact-form__header-text contact-form-text text-color-white">hello.ts</span>
      <div className="contact-form__box">
        <form className="contact-form__inputs_box">
          <NameInput register={register} errors={errors} clearErrors={clearErrors} />
          <EmailInput register={register} errors={errors} clearErrors={clearErrors} />
          <PhoneInput register={register} errors={errors} clearErrors={clearErrors} />
          <TextInput register={register} errors={errors} clearErrors={clearErrors} />
          <div className="contact-form-text text-color-white">
            {`error.Name: `}
            <span className={errors.name ? 'contact-form__invalid ' : 'contact-form__valid '}>
              {errors.name ? errors.name.message : 'none'}
            </span>
          </div>
          <div className="contact-form-text text-color-white">
            {`error.Name: `}
            <span className={errors.email ? 'contact-form__invalid ' : 'contact-form__valid '}>
              {errors.email ? errors.email.message : 'none'}
            </span>
          </div>
          <div className="contact-form-text text-color-white">
            {`error.Phone: `}
            <span className={errors.phone ? 'contact-form__invalid ' : 'contact-form__valid '}>
              {errors.phone ? errors.phone.message : 'none'}
            </span>
          </div>
          <div className="contact-form-text text-color-white">
            {`error.Phone: `}
            <span className={errors.text ? 'contact-form__invalid ' : 'contact-form__valid '}>
              {errors.text ? errors.text.message : 'none'}
            </span>
          </div>
          <ButtonRounded
            type="submit"
            style="dark"
            text="send"
            onClick={handleSubmit((data) => {
              handleEmailSend(data);
              !sendingErr && reset();
            })}
          />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

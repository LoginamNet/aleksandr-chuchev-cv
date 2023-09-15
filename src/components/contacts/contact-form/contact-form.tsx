import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import EmailInput from './contact-form-inputs/email-input';
import PhoneInput from './contact-form-inputs/phone-input';
import NameInput from './contact-form-inputs/name-input';
import TextInput from './contact-form-inputs/text-input';
import ErrorStatus from './contact-form-statuses/error-status';
import SubmitStatus from './contact-form-statuses/submit-status';
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
  const [submitText, setSubmitText] = useState('submit required');

  const handleEmailSend = (data: FormInputs) => {
    setSendingSuccess(false);
    setSendingErr(false);
    setSubmitText('submition...');

    try {
      emailjs.send('service_tfge3hj', 'template_loginamnet_cv', data, 'wcOP4ASeKBuPGJUkL');

      setSendingSuccess(true);
      setSubmitText('submited');
    } catch (error) {
      setSendingErr(true);
      setSubmitText('error. try again');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<FormInputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    const submitBtnTimer = setTimeout(() => {
      if (sendingSuccess || sendingErr) {
        setSubmitText('submit required');
        setSendingSuccess(false);
        setSendingErr(false);
      }
    }, 2500);

    return () => {
      clearTimeout(submitBtnTimer);
    };
  }, [sendingErr, sendingSuccess, submitText]);

  return (
    <div className="contact-form">
      <span className="contact-form__header-text contact-form-text text-color-white">hello.ts</span>
      <div className="contact-form__box">
        <form className="contact-form__inputs-box">
          <NameInput register={register} errors={errors} clearErrors={clearErrors} />
          <div className="contact-form__email-phone-box">
            <EmailInput register={register} errors={errors} clearErrors={clearErrors} />
            <PhoneInput register={register} errors={errors} clearErrors={clearErrors} />
          </div>
          <TextInput register={register} errors={errors} clearErrors={clearErrors} />
          <div className="contact-form__submition">
            <div className="contact-form__submition-text contact-form-text text-color-white">
              <span className="contact-form-text text-color-pink">const</span> submition
              <span className="contact-form-text text-color-pink"> = </span>
              {`{`}
            </div>
            <div className="contact-form__submition-data">
              <ErrorStatus
                text={`error.Name: `}
                error={errors.name}
                message={errors.name?.message}
              />
              <ErrorStatus
                text={`error.Email: `}
                error={errors.email}
                message={errors.email?.message}
              />
              <ErrorStatus
                text={`error.Phone: `}
                error={errors.phone}
                message={errors.phone?.message}
              />
              <ErrorStatus
                text={`error.Message: `}
                error={errors.text}
                message={errors.text?.message}
              />
              <SubmitStatus
                sendingErr={sendingErr}
                sendingSuccess={sendingSuccess}
                submitText={submitText}
              />
            </div>
            <span className="contact-form-text text-color-white">{`}`}</span>
          </div>
          <ButtonRounded
            type="submit"
            style="dark"
            text="submit"
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

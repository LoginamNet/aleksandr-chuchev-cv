import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import EmailInput from "./contact-form-inputs/email-input";
import PhoneInput from "./contact-form-inputs/phone-input";
import NameInput from "./contact-form-inputs/name-input";
import TextInput from "./contact-form-inputs/text-input";
import ButtonRounded from "../../buttons/button-rounded";

import layout from "../../../layout.module.css";
import styles from "./contact-form.module.css";

export type FormInputs = {
  name: string;
  email: string;
  phone: string;
  text: string;
};

type ComponentProps = {
  setIsDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactForm(props: ComponentProps) {
  const [isSending, setIsSending] = useState(false);
  const [sendingSuccess, setSendingSuccess] = useState(false);
  const [sendingErr, setSendingErr] = useState(false);
  const [submitText, setSubmitText] = useState("");

  const handleEmailSend = (data: FormInputs) => {
    setIsSending(true);
    setSendingSuccess(false);
    setSendingErr(false);
    setSubmitText("Submition...");

    try {
      emailjs.send(
        "service_tfge3hj",
        "template_loginamnet_cv",
        data,
        "wcOP4ASeKBuPGJUkL"
      );

      setSendingSuccess(true);
      setSubmitText(
        "Thank you! We will get in touch with you as soon as possible!"
      );
    } catch (error) {
      setSendingErr(true);
      setSubmitText("Some error occured. Please, try again!");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<FormInputs>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    const submitBtnTimer = setTimeout(() => {
      if (sendingSuccess) {
        setSubmitText("");
        setIsSending(false);
        setSendingSuccess(false);
        reset();
        props.setIsDisplayed(false);
      } else if (sendingErr) {
        setSubmitText("");
        setIsSending(false);
        setSendingErr(false);
      }
    }, 5000);

    return () => {
      clearTimeout(submitBtnTimer);
    };
  }, [props, reset, sendingErr, sendingSuccess, submitText]);

  return (
    <div
      className={`${styles.contact_form} ${
        isSending && styles.contact_form__disabled
      }`}
    >
      <div className={styles.contact_form__box}>
        <form className={styles.contact_form__inputs_box}>
          <NameInput
            register={register}
            errors={errors}
            clearErrors={clearErrors}
          />
          <div className={styles.contact_form__email_phone_box}>
            <EmailInput
              register={register}
              errors={errors}
              clearErrors={clearErrors}
            />
            <PhoneInput
              register={register}
              errors={errors}
              clearErrors={clearErrors}
            />
          </div>
          <TextInput
            register={register}
            errors={errors}
            clearErrors={clearErrors}
          />
          <div className={styles.contact_form__button_box}>
            <ButtonRounded
              type="submit"
              style="dark"
              text={sendingSuccess ? "done" : sendingErr ? "error" : "submit"}
              sendingSuccess={sendingSuccess}
              sendingErr={sendingErr}
              onClick={handleSubmit((data) => {
                handleEmailSend(data);
              })}
            />
            <span
              className={`${styles.contact_form__submition_text} ${layout.text_color_white}`}
            >
              {(sendingSuccess || sendingErr) && submitText}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

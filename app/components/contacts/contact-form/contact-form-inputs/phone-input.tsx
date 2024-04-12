import {
  UseFormRegister,
  FieldErrors,
  UseFormClearErrors,
} from "react-hook-form";
import InputMask from "react-input-mask";

import { FormInputs } from "../contact-form";

import layout from "../../../../layout.module.css";
import styles from "../contact-form.module.css";

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function PhoneInput(props: ComponentProps) {
  const { register, errors, clearErrors } = props;

  return (
    <div className={styles.contact_form__input_box}>
      <label
        className={`${styles.contact_form_text} ${layout.text_color_white}`}
        htmlFor="phone"
      >
        Phone number
      </label>
      <div
        className={`${styles.contact_form__input} ${
          errors.phone && styles.contact_form__input_error
        }
        }`}
      >
        <InputMask
          mask="+7 (999) 999-99-99"
          className={styles.contact_form_text}
          placeholder="+7 (921) 123-45-67"
          {...register("phone", {
            pattern: {
              value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
              message: "Please, check your phone number",
            },
          })}
          onChange={() => {
            errors.phone && clearErrors("phone");
          }}
        />
      </div>
      <span
        className={`${styles.contact_form__input_error__text} ${styles.contact_form__input_error__text__long} ${layout.text_color_red}`}
      >
        {errors.phone && errors.phone.message}
      </span>
    </div>
  );
}

export default PhoneInput;

import {
  UseFormRegister,
  FieldErrors,
  UseFormClearErrors,
} from "react-hook-form";

import { FormInputs } from "../contact-form";

import layout from "../../../../layout.module.css";
import styles from "../contact-form.module.css";

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function TextInput(props: ComponentProps) {
  const { register, errors, clearErrors } = props;

  return (
    <div className={styles.contact_form__input_box}>
      <label
        className={`${styles.contact_form_text} ${layout.text_color_white}`}
        htmlFor="text"
      >
        Message
        <span className={styles.contact_form__require_dot}>
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path
              d="M1.56396 4.4801V3.8321H2.58396L3.41196 3.9401L3.47196 3.8081L2.79996 3.3041L2.07996 2.5721L2.53596 2.1281L3.25596 2.8481L3.77196 3.5081L3.90396 3.4481L3.79596 2.6201V1.6001H4.44396V2.6201L4.33597 3.4481L4.46796 3.5081L4.98396 2.8481L5.70397 2.1281L6.15997 2.5721L5.43996 3.3041L4.76796 3.8081L4.82796 3.9401L5.65596 3.8321H6.67596V4.4801H5.65596L4.82796 4.3841L4.76796 4.5041L5.43996 5.0201L6.15997 5.7401L5.70397 6.1961L4.98396 5.4761L4.46796 4.8041L4.33597 4.8641L4.44396 5.6921V6.7121H3.79596V5.6921L3.90396 4.8641L3.77196 4.8041L3.25596 5.4761L2.53596 6.1961L2.07996 5.7401L2.79996 5.0201L3.47196 4.5041L3.41196 4.3841L2.58396 4.4801H1.56396Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </label>
      <div
        className={`${styles.contact_form__input} ${
          errors.text && styles.contact_form__input_error
        }
        } ${styles.contact_form__input_textarea}`}
      >
        <textarea
          className={styles.contact_form_text}
          rows={3}
          maxLength={400}
          placeholder="Hello! I want to order a website from you. Call me back."
          {...register("text", {
            required: "Please, enter your message",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters long",
            },
          })}
          onChange={() => {
            errors.text && clearErrors("text");
          }}
        />
      </div>
      <span
        className={`${styles.contact_form__input_error__text} ${styles.contact_form__input_error__text__long} ${layout.text_color_red}`}
      >
        {errors.text && errors.text.message}
      </span>
    </div>
  );
}

export default TextInput;

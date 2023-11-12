import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { FormInputs } from '../contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function PhoneInput(props: ComponentProps) {
  return (
    <div className="contact-form__input-box">
      <label className="contact-form-text text-color-white" htmlFor="phone">
        Phone number
      </label>
      <div
        className={`contact-form__input ${
          props.errors.phone && 'contact-form__input-error'
        } contact-form__input`}
      >
        <InputMask
          mask="+7 (999) 999-99-99"
          className="contact-form-text"
          placeholder="+7 (921) 123-45-67"
          {...props.register('phone', {
            pattern: {
              value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
              message: 'Please, check your phone number',
            },
          })}
          onChange={() => {
            props.errors.phone && props.clearErrors('phone');
          }}
        />
      </div>
      <span className="contact-form__input-error__text contact-form__input-error__text__long text-color-red">
        {props.errors.phone && props.errors.phone.message}
      </span>
    </div>
  );
}

export default PhoneInput;

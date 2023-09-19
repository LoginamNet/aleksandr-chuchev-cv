import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
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
        data.Phone? <span className="text-color-pink">=</span>
      </label>
      <div className="contact-form__input">
        <input
          className="contact-form-text"
          type="text"
          placeholder="+7 000 000 00 00"
          {...props.register('phone', {
            pattern: {
              value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
              message: 'invalid phone number',
            },
          })}
          onChange={() => {
            props.errors.phone && props.clearErrors('phone');
          }}
        />
      </div>
    </div>
  );
}

export default PhoneInput;

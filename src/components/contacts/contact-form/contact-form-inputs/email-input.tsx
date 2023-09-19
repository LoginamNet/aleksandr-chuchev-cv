import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
import { FormInputs } from '../contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function EmailInput(props: ComponentProps) {
  return (
    <div className="contact-form__input-box">
      <label className="contact-form-text text-color-white" htmlFor="email">
        data.Email! <span className="text-color-pink">=</span>
      </label>
      <div className="contact-form__input">
        <input
          className="contact-form-text"
          type="text"
          placeholder="example@gmail.com"
          {...props.register('email', {
            required: 'email required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
          onChange={() => {
            props.errors.email && props.clearErrors('email');
          }}
        />
      </div>
    </div>
  );
}

export default EmailInput;

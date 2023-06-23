import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
import { FormInputs } from '../cv-contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function EmailInput(props: ComponentProps) {
  return (
    <div className="email-input-box">
      <input
        className="email-input"
        type="text"
        placeholder="Email"
        {...props.register('email', {
          required: '*Email is Required!',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: '*Invalid email address',
          },
        })}
        onChange={() => {
          props.errors.email && props.clearErrors('email');
        }}
      />
      {props.errors.email && (
        <span className="form-invalid-text">{props.errors.email.message}</span>
      )}
    </div>
  );
}

export default EmailInput;

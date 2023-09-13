import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
import { FormInputs } from '../contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function TextInput(props: ComponentProps) {
  return (
    <div className="text-input-box">
      <textarea
        className="text-input"
        rows={8}
        placeholder="Message"
        {...props.register('text', {
          required: '*Please, enter your message!',
        })}
        onChange={() => {
          props.errors.email && props.clearErrors('text');
        }}
      />
      {props.errors.text && <span className="form-invalid-text">{props.errors.text.message}</span>}
    </div>
  );
}

export default TextInput;

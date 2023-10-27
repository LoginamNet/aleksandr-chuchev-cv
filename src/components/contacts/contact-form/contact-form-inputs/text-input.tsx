import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
import { FormInputs } from '../contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function TextInput(props: ComponentProps) {
  return (
    <div className="contact-form__input-box">
      <label className="contact-form-text text-color-white" htmlFor="text">
        data.Message! <span className="text-color-pink">=</span>
      </label>
      <div className="contact-form__input contact-form__input-textarea">
        <textarea
          className="contact-form-text"
          rows={4}
          maxLength={400}
          placeholder="start typing here..."
          {...props.register('text', {
            required: 'enter message',
            minLength: { value: 10, message: 'message must be at least 10 characters long' },
          })}
          onChange={() => {
            props.errors.email && props.clearErrors('text');
          }}
        />
      </div>
    </div>
  );
}

export default TextInput;

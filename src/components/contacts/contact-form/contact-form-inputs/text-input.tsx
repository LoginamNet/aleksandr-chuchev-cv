import { useRef } from 'react';
import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
import { FormInputs } from '../contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function TextInput(props: ComponentProps) {
  const elementRef = useRef<HTMLTextAreaElement>(null);

  const handleinput = () => {
    if (elementRef.current !== null) {
      elementRef.current.style.height = 'auto';
      elementRef.current.style.height = elementRef.current.scrollHeight + 'px';
    }
  };

  return (
    <div className="contact-form__input-box">
      <label className="contact-form-text text-color-white" htmlFor="text">
        data.Message! <span className="text-color-pink">=</span>
      </label>
      <div className="contact-form__input contact-form__input-textarea">
        <textarea
          className="contact-form-text"
          rows={3}
          maxLength={400}
          placeholder="start typing here..."
          {...props.register('text', {
            required: 'enter message',
          })}
          onChange={() => {
            props.errors.email && props.clearErrors('text');
            handleinput();
          }}
          ref={elementRef}
        />
      </div>
    </div>
  );
}

export default TextInput;

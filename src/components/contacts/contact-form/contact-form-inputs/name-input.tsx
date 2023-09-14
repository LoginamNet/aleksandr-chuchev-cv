import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
import { FormInputs } from '../contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function NameInput(props: ComponentProps) {
  return (
    <div className="contact-form__input-box">
      <label className="contact-form-text text-color-white" htmlFor="name">
        data.Name! <span className="text-color-pink">=</span>
      </label>
      <div className="contact-form__input">
        <input
          className="contact-form-text"
          type="text"
          placeholder="your name number"
          {...props.register('name', {
            required: 'enter your name',
            pattern: {
              value:
                /^([A-Za-zА-Яа-яЁё]{2,}\s[A-Za-zА-Яа-яЁё]{1,}'?-?[A-Za-zА-Яа-яЁё]{2,}\s?([A-Za-zА-Яа-яЁё]{1,})?)$/i,
              message: 'enter your first name and last name with capital letters first - Jonh Dow',
            },
          })}
          onChange={() => {
            props.errors.name && props.clearErrors('name');
          }}
        />
      </div>
    </div>
  );
}

export default NameInput;

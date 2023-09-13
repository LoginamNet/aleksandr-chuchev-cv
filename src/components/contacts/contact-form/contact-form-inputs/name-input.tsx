import { UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form';
import { FormInputs } from '../contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  clearErrors: UseFormClearErrors<FormInputs>;
};

function NameInput(props: ComponentProps) {
  return (
    <div className="name-input-box">
      <input
        className="name-input"
        type="text"
        placeholder="Name"
        {...props.register('name', {
          required: '*Please, enter your name above!',
          pattern: {
            value:
              /^([A-Za-zА-Яа-яЁё]{2,}\s[A-Za-zА-Яа-яЁё]{1,}'?-?[A-Za-zА-Яа-яЁё]{2,}\s?([A-Za-zА-Яа-яЁё]{1,})?)$/i,
            message: '*Enter your firs name and last name with capital letters first - Jonh Dow',
          },
        })}
        onChange={() => {
          props.errors.name && props.clearErrors('name');
        }}
      />
      {props.errors.name && <span className="form-invalid-text">{props.errors.name.message}</span>}
    </div>
  );
}

export default NameInput;

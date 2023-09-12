import { UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../cv-contact-form';

type ComponentProps = {
  register: UseFormRegister<FormInputs>;
};

function FileInput(props: ComponentProps) {
  return (
    <div className="email-input-box">
      <input className="file-input" type="file" {...props.register('file')} />
    </div>
  );
}

export default FileInput;

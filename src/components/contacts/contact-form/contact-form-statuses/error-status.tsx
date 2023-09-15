import { FieldError } from 'react-hook-form';

type ComponentProps = {
  text: string;
  error: FieldError | undefined;
  message: string | undefined;
};

function ErrorStatus(props: ComponentProps) {
  return (
    <div className="contact-form-text text-color-white">
      {props.text}
      <span className={props.error ? 'contact-form__invalid ' : 'contact-form__valid '}>
        {props.error ? props.message : 'no errors'}
      </span>
    </div>
  );
}

export default ErrorStatus;

type ComponentProps = {
  sendingErr: boolean;
  sendingSuccess: boolean;
  submitText: string;
};

function SubmitStatus(props: ComponentProps) {
  return (
    <div className="contact-form-text text-color-white">
      {`status: `}
      <span
        className={
          props.sendingErr
            ? 'contact-form__invalid '
            : props.sendingSuccess
            ? 'contact-form__valid'
            : 'text-color-white'
        }
      >
        {props.submitText}
      </span>
    </div>
  );
}

export default SubmitStatus;

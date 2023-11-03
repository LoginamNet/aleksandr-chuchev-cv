import PrivacyListItem from './privacy-list-item';

type ComponentProps = {
  list: string[];
};

function PrivacyList(props: ComponentProps) {
  return (
    <ul className="privacy-list">
      {props.list.map((el, key) => (
        <PrivacyListItem key={key} text={el} />
      ))}
    </ul>
  );
}

export default PrivacyList;

import PrivacyListItem from "./privacy-list-item";

import styles from "../privacy.module.css";

type ComponentProps = {
  list: string[];
};

function PrivacyList(props: ComponentProps) {
  const { list } = props;

  return (
    <ul className={styles.privacy_list}>
      {list.map((el, key) => (
        <PrivacyListItem key={key} text={el} />
      ))}
    </ul>
  );
}

export default PrivacyList;

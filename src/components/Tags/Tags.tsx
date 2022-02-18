import { Icon, Label } from 'semantic-ui-react';

type TagProps = {
  label: string;
  className: string;
  clearable: boolean;
  clickable: boolean;
  activeTags: [];
  setActiveTags: ([]) => void;
}

const Tag = ({
  label,
  className,
  activeTags,
  setActiveTags,
  clearable,
  clickable,
}: TagProps) => {
  const removeTag = (e: any, text: string) => {
    setActiveTags(activeTags.filter((el) => el !== text));
  };

  return (
    <Label key={label} className={className} as={clickable && 'a'} circular>
      {label}
      {clearable && <Icon text={label} name='delete' onClick={removeTag} />}
    </Label>
  );
};


export default Tag;

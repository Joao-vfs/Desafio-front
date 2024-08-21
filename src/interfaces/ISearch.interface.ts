export interface ISearchComponentsProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIconClick: () => void;
  resultSearch: () => void;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isExpanded: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  search: string;
}

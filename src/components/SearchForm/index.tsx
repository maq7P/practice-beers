import { FC, SyntheticEvent } from 'react';
import useInput from '../../hooks/useInput';
import useMediaQuery from '../../hooks/useMediaQuery';
import Button from '../Button';
import styles from './styles.module.scss';
import {ReactComponent  as Search} from '../../assets/search.svg';

interface IForm {
  onSubmit: (value: string) => void;
  initialValue: string;
  clearForm: () => void;
  btnTitle: string;
}
const SearchForm: FC<IForm> = ({ onSubmit, initialValue, clearForm, btnTitle }) => {
  const { value, onChange, clearValue } = useInput(initialValue);
  
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleClick = () => {
    onSubmit(value);
  };

  const handleClear = () => {
    clearValue();
    clearForm();
  };

  const lessThan960 = useMediaQuery('(max-width: 960px)');

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputBlock}>
        <input value={value} onChange={onChange} className={styles.input} />
        {!!value.trim().length && (
          <label className={styles.del} onClick={handleClear}>
            ✘
          </label>
        )}
      </div>
      <Button onClick={handleClick} type="submit" className={styles.searchBtn}>
        {lessThan960 ? <Search width={30} height={25}/> : btnTitle}
      </Button>
    </form>
  );
};
export default SearchForm;

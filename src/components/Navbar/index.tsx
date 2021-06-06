import { FC, memo } from 'react';
import SearchForm from '../SearchForm';
import styles from './styles.module.scss';

interface INavBar {
  search: (value: string) => void;
  clearState: () => void;
  initialValue?: string;
}
const NavBar: FC<INavBar> = memo(({ search, clearState, initialValue = '' }) => {
  const handleSearch = (value: string) => {
    search(value);
  };
  return (
    <div className={styles.wrapper}>
      <SearchForm
        onSubmit={handleSearch}
        clearForm={clearState}
        initialValue={initialValue}
        btnTitle="Search by name"
      />
    </div>
  );
});
export default NavBar;

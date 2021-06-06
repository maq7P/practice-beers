import Button from '../Button';
import styles from './styles.module.scss';
import { FC } from 'react';
interface IFilter {
  filterByAbv: (abv: number) => void;
  filterValues: number[];
  activeFilter: number;
}
const Filter: FC<IFilter> = ({ filterValues, filterByAbv, activeFilter }) => {
  return (
    <div className={styles.filterBlock}>
      {filterValues.map((value, idx) => (
        <Button
          key={value}
          onClick={() => filterByAbv(value)}
          className={styles.btn}
          active={activeFilter === value}>
          <div style={{ display: 'flex' }}>
            <div>more {value}% alcohol</div>
          </div>
        </Button>
      ))}
    </div>
  );
};
export default Filter;

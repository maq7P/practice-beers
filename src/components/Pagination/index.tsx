import clsx from 'clsx';
import { FC, memo } from 'react';
import { PER_PAGE } from '../../constants';
import Button from '../Button';
import styles from './padination.module.scss';

interface IPagination {
  pages?: number;
  onPageChange: (page: number) => void;
  activePage: number;
  countOfEl?: number;
  per_page?: number;
}
const Pagination: FC<IPagination> = ({
  pages,
  onPageChange,
  activePage,
  countOfEl,
  per_page = PER_PAGE,
}) => {
  const handleClick = (currentNumber: number) => {
    onPageChange(currentNumber);
  };
  if (pages) {

    const pagination = Array.from(Array(pages).keys());

    return (
      <div className={styles.wrapper}>
        {pagination.map((index) => (
          <div key={index}>
            <div
              className={clsx({
                [styles.paginationWrapperBtn]: true,
                [styles.paginationWrapperBtnActive]: index === activePage - 1,
              })}
              onClick={() => handleClick(index + 1)}>
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="df-sb align-c">
        <div className={styles.wrapper}>
          <Button
            secondary
            onClick={() => handleClick(activePage - 1)}
            disabled={!activePage || activePage === 1}
            style={{ marginRight: 10 }}>
            ← prev
          </Button>
          <Button
            secondary
            onClick={() => handleClick(activePage + 1)}
            disabled={!countOfEl || countOfEl !== per_page}>
            next →
          </Button>
        </div>
        <div className={clsx(styles.paginationWrapperBtn, styles.paginationWrapperBtnActive)}>
          {activePage || 1}
        </div>
      </div>
    );
  }
};
export default memo(Pagination);

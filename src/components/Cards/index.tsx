import clsx from 'clsx';
import { FC, memo } from 'react';
import { ModelBear } from '../../types/bears';
import Card from './Card';
import styles from './cards.module.scss';
interface ICards {
  bears: ModelBear[];
  loading: boolean;
}
const Cards: FC<ICards> = ({ bears, loading }) => {
  if(loading) {
      return <div>loading...</div>
  }
  return (
    <div className={clsx(styles.root, 'mt30')}>
        {!!bears.length ? (<>
        {bears.map((bear) => (
            <Card bear={bear} key={bear.id}/>
        ))}</>
      ) : (
        <h2>По данным параметрам ничего не найдено.</h2>
      )}
    </div>
  );
};
export default memo(Cards);

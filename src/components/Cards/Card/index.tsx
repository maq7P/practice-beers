import { FC } from 'react';
import { ModelBear } from '../../../types/bears';
import styles from './card.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useMediaQuery from '../../../hooks/useMediaQuery';
import clsx from 'clsx';
interface ICard {
  bear: ModelBear;
}

const Card: FC<ICard> = ({ bear }) => {
  const { name, description, image_url, abv } = bear;
  const lessThan960 = useMediaQuery('(max-width: 960px)');
  
  return (
    <>
      <div className={styles.wrapper}>
        <div className="df">
          {!lessThan960 && <div className={styles.imgBlock}>
            {image_url ? (
              <LazyLoadImage src={image_url} alt={name} className={styles.img} />
            ) : (
              <img src="/bottle.svg" alt={name} className={styles.img} />
            )}
          </div>}
          <div>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        {lessThan960 && <div className={clsx(styles.imgBlock, 'mt10')}>
            {image_url ? (
              <LazyLoadImage src={image_url} alt={name} className={styles.img} />
            ) : (
              <img src="/bottle.svg" alt={name} className={styles.img} />
            )}
          </div>}
        <div className="mt15">Alcohol By Volume: {abv}</div>
      </div>
    </>
  );
};
export default Card;

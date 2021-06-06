import clsx from 'clsx';
import { FC, ReactChild } from 'react';
import styles from './button.module.scss';
interface IButton {
  children: ReactChild;
  className?: string;
  onClick: () => void;
  contained?: boolean;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  secondary?: boolean;
  style?: any;
}
const Button: FC<IButton> = ({
  children,
  className,
  onClick,
  contained,
  secondary,
  active,
  type = 'button',
  disabled = false,
  style = {},
}) => {
  return (
    <button
      className={clsx(
        {
          [styles.btn]: true,
          [styles.btnOutline]: !contained && !disabled,
          [styles.btnContained]: contained && !disabled,
          [styles.btnActive]: active && !disabled,
          [styles.btnSecondary]: secondary && !disabled,
        },
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={style}>
      {children}
    </button>
  );
};
export default Button;

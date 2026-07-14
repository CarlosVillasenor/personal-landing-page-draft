import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({ children, onClick, type = 'button', className = '', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${styles.btnPrimary}`}
      {...props}
    >
      {children}
    </button>
  );
}
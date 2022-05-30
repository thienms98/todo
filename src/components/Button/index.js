import './Button.scss';

function Button({ value, children, size = 'sm', type = 'primary', onClick }) {
    return (
        <button className={['btn', size, type].join(' ')} onClick={onClick}>
            {value || children}
        </button>
    );
}

export default Button;

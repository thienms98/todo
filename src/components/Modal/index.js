import Button from '../Button';
import './Modal.scss';

function Modal({ title, primary, secondary, children, closeModal }) {
    return (
        <div className="modal">
            <div className="overlay" onClick={closeModal}></div>
            <div className="wrapper">
                <div className="title">
                    <span>{title}</span>
                    <Button type="danger" onClick={closeModal}>
                        &times;
                    </Button>
                </div>
                <div className="body">{children}</div>
                <div className="controls">
                    {primary && <Button value={primary[0]} type={primary[1]}></Button>}
                    {secondary && <Button value={secondary[0]} type={secondary[1]} onClick={closeModal}></Button>}
                </div>
            </div>
        </div>
    );
}

export default Modal;

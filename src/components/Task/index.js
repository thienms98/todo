import Button from '../Button';
import './Task.scss';

function Task({ value, active, children, onClick, editMode, deleteMode }) {
    return (
        <div className={'task' + (active ? ' active' : '')} onClick={onClick}>
            <div className="title">{value}</div>
            {children}
            {active && (
                <>
                    <Button value={'edit'} onClick={editMode} />
                    <Button value={'delete'} onClick={deleteMode} />
                </>
            )}
        </div>
    );
}

export default Task;

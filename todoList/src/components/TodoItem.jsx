import "./TodoItem.css";

const Todoitem = ({id, isDone, content, date, onUpdate, onDelete}) =>{
    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
            <div className="TodoItem">
                <input type="checkbox"
                       checked={isDone}
                       onChange={onChangeCheckbox}
                       readOnly/>
                <div className="content">{content}</div>
                <div className="date">{new Date(date).toLocaleDateString()}</div>
                <button onClick={onClickDeleteButton}>삭제</button>
            </div>
    );
}
export default Todoitem;
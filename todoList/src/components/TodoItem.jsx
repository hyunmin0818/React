import "./TodoItem.css";
import {memo} from "react";

const TodoItem =({id,isDone,content,date,onUpdate,onDelete})=>{
    const onChangeCheckbox =()=>{
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return(
        <div className="TodoItem">
            <input type="checkbox" checked={isDone}
                   onChange={onChangeCheckbox} readOnly/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

// export default memo(TodoItem);

// 두번째 인자로 callback 함수를 주면 부모가 리랜더링 될 때마다
// 이 컴포넌트의 props를 스스로 판단화는 게 아니라
// prevProps : 과거의 props
// nextProps : 현재의 props
// 반환 값에 따라, props가 바뀌었는지 안 바뀌었는지 판다.
// T -> props 바뀌치 않음 : 리렌더링 X
// F -> props 바뀜       : 리렌더링 O
// 현재 id, isDone, content, date, onUpdate, onDelete 대상의 props 중에서
// id, isDone, content, date 변경이 되었을 때만 리렌더링을 해주자
export default memo(TodoItem, (prevProps, nextProps) => {
    if (prevProps.id != nextProps.id) {
        return false;
    }
    if (prevProps.isDone != nextProps.isDone) {
        return false;
    }
    if (prevProps.content != nextProps.content) {
        return false;
    }
    if (prevProps.date != nextProps.date) {
        return false;
    }
    return true;
})

export default TodoItem;
import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};
TodoList.defaultProps = {
    todoList: [],
}
function TodoList(props) {
    return (
        <div>
            <ul>
                {props.TodoList.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
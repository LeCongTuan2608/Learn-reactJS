import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};
TodoList.defaultProps = {
    todoList: [],
}
function TodoList(props) {
    const {arr} = props;
    return (
        <div>
            <ul>
                {arr.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
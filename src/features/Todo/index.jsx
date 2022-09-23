import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
TodoFeature.propTypes = {};

function TodoFeature(props) {
   const [test, setTest] = useState('');
   const inTodoList = [
      {
         id: 1,
         title: 'eat',
         status: 'new',
      },
      {
         id: 2,
         title: 'sleep',
         status: 'completed',
      },
      {
         id: 3,
         title: 'code',
         status: 'new',
      },
   ];
   const [todoList, setTodoList] = useState(inTodoList);
   const handleTodoClick = (item, index) => {
      const newTodoList = [...todoList];
      newTodoList[index] = {
         ...newTodoList[index],
         status: newTodoList[index].status === 'new' ? 'completed' : 'new',
      };
      setTodoList(newTodoList);
   };
   const [filterStatus, setFilterStatus] = useState('all');
   const handleShowAllClick = () => {
      setFilterStatus('all');
   };
   const handleShowCompletedClick = () => {
      setFilterStatus('completed');
   };
   const handleShowNewClick = () => {
      setFilterStatus('new');
   };
   const renderTodoList = todoList.filter(
      (todo) => filterStatus === 'all' || filterStatus === todo.status,
   );

   const handleOnSubmit = (formValues) => {
      const newToDoList = [...todoList];
      const newTodo = {
         id: newToDoList.length + 1,
         ...formValues,
      };
      newToDoList.push(newTodo);
      setTodoList(newToDoList);
   };
   const handleToDoFormSubmit = (value) => {
      console.log('value', value);
   };
   console.log(test);
   return (
      <div>
         <h3>To do form</h3>
         <TodoForm onSubmit={handleToDoFormSubmit} setTest={setTest} />

         <h3>Todo List</h3>
         <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
         <div>
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
            {/* <TodoForm onSubmit={handleOnSubmit} /> */}
         </div>
      </div>
   );
}
export default TodoFeature;

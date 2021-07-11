import React from "react";
import styles from "../../styles/InputTodo.module.scss";

function prevent(e) {
  e.preventDefault();

  console.log("submit");
}

const InputTodo = ({ onChange, newTodo, submitHandler }) => {
  function handleKeydown(e) {
    if (e.keyCode === 13) {
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Create a new todo..."
          className={styles.inputtodo}
          onChange={onChange}
          value={newTodo}
        />
      </form>
    </div>
  );
};

export default InputTodo;

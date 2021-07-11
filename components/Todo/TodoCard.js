import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Todocard.module.scss";

import deleteLogo from "../../public/images/icon-cross.svg";

const TodoCard = ({ todo, doneHandler, deleteHandler }) => {
  const [status, setStatus] = useState(todo.isFinish);
  const [data, setData] = useState(todo);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    setStatus(todo.isFinish);
    setData(todo);
  }, [todo]);
  //   console.log(data.id);
  return (
    <div
      className={
        remove == false
          ? `${styles.container}`
          : `${styles.container} ${styles.delete}`
      }
    >
      <div
        className={
          data.isFinish == true
            ? `${styles.checkbox} ${styles.active}`
            : `${styles.checkbox}`
        }
        onClick={() => doneHandler(data.id)}
      ></div>
      <div className={styles.containerbox}>
        <span>{todo.task}</span>
      </div>
      <div
        className={styles.deleteBtn}
        onClick={() => {
          setTimeout(() => {
            deleteHandler(data.id);
          }, 1000);
          setRemove(true);
          setTimeout(() => {
            setRemove(false);
          }, 1000);
        }}
      >
        <Image src={deleteLogo} />
      </div>
    </div>
  );
};

export default TodoCard;

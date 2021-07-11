import React, { useEffect, useState } from "react";
import Todocard from "./TodoCard";
import styles from "../../styles/ListTodo.module.scss";

const ListTodo = ({
  data,
  doneHandler,
  deleteHandler,
  deleteCompletedHandler,
}) => {
  const [menu, setMenu] = useState("all");
  const [notfinished, setNotfinished] = useState(1);
  const [count, setCount] = useState([]);

  useEffect(() => {
    setCount(data);
  }, [data]);

  const notFinished = count.filter((item) => item.isFinish == false);

  return (
    <div className={styles.container}>
      {menu == "all"
        ? data.map((todo, index) => (
            <Todocard
              todo={todo}
              key={index}
              doneHandler={doneHandler}
              deleteHandler={deleteHandler}
            />
          ))
        : data
            .filter((dt) => dt.isFinish === (menu == "active" ? false : true))
            .map((todo, index) => (
              <Todocard
                todo={todo}
                key={index}
                doneHandler={doneHandler}
                deleteHandler={deleteHandler}
              />
            ))}
      <div className={styles.menucontainer}>
        <div className={styles.menubox}>
          <span className={styles.menutext}>
            {notFinished.length} items left
          </span>
          <div className={styles.menus}>
            <span
              className={
                menu === "all"
                  ? `${styles.menutext} ${styles.active}`
                  : styles.menutext
              }
              onClick={() => setMenu("all")}
            >
              All
            </span>
            <span
              className={
                menu === "active"
                  ? `${styles.menutext} ${styles.active}`
                  : styles.menutext
              }
              onClick={() => setMenu("active")}
            >
              Active
            </span>
            <span
              className={
                menu === "complete"
                  ? `${styles.menutext} ${styles.active}`
                  : styles.menutext
              }
              onClick={() => setMenu("complete")}
            >
              Completed
            </span>
          </div>
          <span
            onClick={() => deleteCompletedHandler()}
            className={styles.menutext}
          >
            Clear Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListTodo;

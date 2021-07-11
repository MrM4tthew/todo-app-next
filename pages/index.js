import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Background from "../components/Background";
import Todo from "../components/Todo/Todo";
import { useState, useEffect } from "react";

// Theme (0 = dark, 1 = light)
if (process.browser) {
  var body = window.document.body;
  var themes = ["dark-theme", "light-theme"];

  if (localStorage.getItem("themeIndex") == null) {
    localStorage.setItem("themeIndex", 0);
  }

  var themeIndex = localStorage.getItem("themeIndex");
  var currentIndex = themeIndex % themes.length;
  body.classList.add(themes[themeIndex % themes.length]);
  // var currentTheme = themes[currentIndex];
}

// function changeTheme() {
//   themeIndex++;
//   body.className = '';
//   body.classList.add(themes[themeIndex % themes.length]);
//   if (process.browser) {
//     localStorage.setItem("themeIndex", themeIndex);
//   }
// }

export default function Home() {
  const [index, setIndex] = useState();

  useEffect(() => {

    setIndex(currentIndex)
  }, [])

  function changeTheme() {
    setIndex((index + 1) % 2)
    themeIndex++;
    body.className = '';
    body.classList.add(themes[themeIndex % themes.length]);
    if (process.browser) {
      localStorage.setItem("themeIndex", themeIndex);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background currentTheme={index} />
      <Todo
        currentTheme={index}
        changeTheme={changeTheme}
      />
      {/* <button
        style={{ top: "0", position: "absolute", zIndex: "99" }}
        onClick={() => {
          changeTheme();
          // setIndex((index + 1) % 2);
        }}
      >
        change
      </button> */}
    </div>
  );
}

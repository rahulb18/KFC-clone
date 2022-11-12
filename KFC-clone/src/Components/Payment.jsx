import React from "react";
import styles from "./styles/Cart.module.css";
function Payment() {
  return (
    <div>
      <hr style={{ marginTop: "20px" }} />
      <div className={styles.container}>
        <div className={styles.bars}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
            alt=""
          />
          <h1 className={styles.heading}>Check Out</h1>
        </div>
      </div>
    </div>
  );
}

export default Payment;
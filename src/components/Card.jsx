import React from "react"

function Card({ color, id, stat, handleClick }) {
  const itemClass = stat ? "active " + stat : ""

  return (
    <div
      className={
        "w-20 h-20 " +
        itemClass +
        " rounded-md m-1 flex items-center justify-center cursor-pointer"
      }
      style={{
        backgroundColor:
          stat === "active" || stat === "correct" ? color : "black",
      }}
      onClick={() => stat !== "correct" && stat !== "wrong" && handleClick(id)}
    ></div>
  )
}

export default Card
import React from "react";
import classes from "./CircularShape.module.css";

const CircularShape = ({ users, centerImage, bg }) => {
  const calculatePosition = (index, totalImages, radius) => {
    const angle = (360 / totalImages) * index;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  let wrapperSize = 150; // Set the desired size of the circular wrapper
  const radius = wrapperSize / 2;

  const renderImages = (imagesToRender, isSecondSet) => {
    return imagesToRender.map((img, index) => {
      const totalImages = imagesToRender.length;
      const baseRadius = isSecondSet ? radius * 0.9 : radius * 0.45;
      const { x, y } = calculatePosition(index, totalImages, baseRadius);
      const transformStyle = {
        transform: `translate(${x}px, ${y}px)`,
      };

      return (
        <li key={index} style={transformStyle}>
          <div className={[classes.imageContainer].join(" ")}>
            <div className={classes.img}>{img}</div>
          </div>
        </li>
      );
    });
  };

  const firstSet = users.slice(1, 7);
  const secondSet = users.slice(7);

  return (
    <div
      className={classes.wrapper}
      style={{ width: wrapperSize, height: wrapperSize, "--bg": bg }}
    >
      <div className={classes.orbit}>
        <ul>
          {renderImages(firstSet, false)}
          {secondSet.length > 0 && (
            <ul className={classes.secondOrbit}>
              {renderImages(secondSet, true)}
            </ul>
          )}
        </ul>
      </div>
      <div className={classes.centerImageContainer}>
        <div className={classes["center-image"]}>
          {/* <img src={centerImage} alt="" /> */}
          <div className={classes.img}>{users[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default CircularShape;

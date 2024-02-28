import React from "react";
import classes from "./MainComponent.module.css";
import CircularShape from "../CircularShape/CircularShape";

const MainComponent = ({
  dashBoard,
  data,
  forTwo,
  forThree,
  forFour,
  forFive,
}) => {
  const items = data.items.slice(0, 5);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div
        className={[classes.wrapper, classes[`wrapper-${items.length}`]].join(
          " "
        )}
      >
        <div
          className={classes.dashBoard}
          style={{
            "--bg": dashBoard.bg,
            "--headingColor": dashBoard.headingColor,
          }}
        >
          <h3 className={classes.heading}>{dashBoard.heading}</h3>
          <div className={classes.icons}>
            {dashBoard.icons.map((el, i) => (
              <div
                className={classes.iconContainer}
                key={i}
                style={{ "--bg": el.bg, "--border": el.border }}
              >
                <div className={classes.icon}>{el.icon}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.brainWrapper}>
            {items.length === 2 && (
              <div className={[classes.curveLine, classes.forTwo].join(" ")}>
                {forTwo}
              </div>
            )}
            {items.length === 3 && (
              <div className={[classes.curveLine, classes.forThree].join(" ")}>
                {forThree}
              </div>
            )}
            {items.length === 4 && (
              <div className={[classes.curveLine, classes.forFour].join(" ")}>
                {forFour}
              </div>
            )}{" "}
            {items.length === 5 && (
              <div className={[classes.curveLine, classes.forFive].join(" ")}>
                {forFive}
              </div>
            )}
            {items.map((el, i) => (
              <div className={classes.mycontainer} key={i}>
                <div className={classes.circle}>
                  {" "}
                  <p
                    className={classes.name}
                    dangerouslySetInnerHTML={{ __html: el.name }}
                  ></p>
                  <div className={classes.img}>{el.img}</div>
                </div>
                <div className={classes.straightLine}>{el.straightLine}</div>

                <CircularShape {...el.userContainer} bac />

                <div
                  className={classes.compensation}
                  style={{
                    "--textColor": el.compensation.textColor,
                    "--bg": el.compensation.bgColor,
                  }}
                >
                  <div className={classes.compensationIcon}>
                    {el.compensation.img}
                  </div>
                  <p className={classes.compensationText}>
                    {el.compensation.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

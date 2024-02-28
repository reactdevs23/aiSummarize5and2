import { useState } from "react";

import Brain from "./images/Brain";

import StraightLine from "./images/StraightLine";
import LineChart from "./images/LinChart";
import BarChart from "./images/BarChart";
import PieChart from "./images/PieChart";

import MainComponent from "./components/MainComponent/MainComponent";
import Compensation from "./images/Compensation";
import Icon1 from "./images/Icons/Icon1";
import ForFour from "./images/ForFour";
import ForTwo from "./images/ForTwo";
import ForThree from "./images/ForThree";
import ForFive from "./images/ForFive";
function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#F2F4F7",
    users: [
      <Icon1 color="#5D6B98" bg="#E9B8A6" />,
      <Icon1 color="#5D6B98" bg="#B4E9F1" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#E9B8A6" />,
      <Icon1 color="#5D6B98" bg="#B4E9F1" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#E9B8A6" />,
      <Icon1 color="#5D6B98" bg="#B4E9F1" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#E9B8A6" />,
      <Icon1 color="#5D6B98" bg="#B4E9F1" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#B4E9F1" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
      <Icon1 color="#5D6B98" bg="#F2DADE" />,
    ],
    dashBoard: {
      heading: "Insights Dashboard",
      headingColor: "#000",
      bg: "#fff",
      icons: [
        {
          icon: <LineChart color="#7D89B0" />,
          bg: "#F9FAFB",
          border: "1px solid #F2F4F7",
        },
        {
          icon: <BarChart color="#7D89B0" />,
          bg: "#F9FAFB",
          border: "1px solid #F2F4F7",
        },
        {
          icon: <PieChart color="#7D89B0" />,
          bg: "#F9FAFB",
          border: "1px solid #F2F4F7",
        },
      ],
    },
    circleBg: "#B8E4E2",
    nameColor: "#000",

    nameColor: "#000",
    forTwo: <ForTwo color="#D5D9EB" />,
    forThree: <ForThree color="#D5D9EB" />,
    forFour: <ForFour color="#D5D9EB" />,
    forFive: <ForFive color="#D5D9EB" />,
    data: {
      items: [
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#E9B8A6" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#B4E9F1" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
              <Icon1 color="#5D6B98" bg="#F2DADE" />,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
      ],
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--circleBg": allData.circleBg,
          "--nameColor": allData.nameColor,
          fontFamily: allData.fontFamily,
          background: allData.background,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;

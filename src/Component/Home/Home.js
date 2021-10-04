import React from "react";
import Header from "../Header/Header";
import TopCourseCard from "../TopCourseCard/TopCourseCard";
import TopCourses from "../TopCourses/TopCourses";

const Home = () => {
  return (
    <div>
      {/* <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
        <span style={{ color: "#FC6884" }}>Niz</span>
        <span style={{}}> Academy</span>
      </h1> */}
      <h2
        style={{
          color: "#2c234d",
          fontWeight: "800",
          fontSize: "50px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "20px",
        }}
      >
        Online Courses From <br />
        The World’s Top Publishers{" "}
      </h2>
      {/* <Header></Header> */}
      {/* <TopCourseCard></TopCourseCard> */}
      <TopCourses></TopCourses>
    </div>
  );
};

export default Home;

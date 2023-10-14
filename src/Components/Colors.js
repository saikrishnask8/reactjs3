import React from "react";

function hide() {
  document.getElementById("box").style.opacity = 0;
}

function Clrs() {
  function red() {
    document.getElementById("back").style.backgroundColor = "red";
    return;
  }

  function greenyellow() {
    document.getElementById("back").style.backgroundColor = "greenyellow";
    return;
  }

  function blue() {
    document.getElementById("back").style.backgroundColor = "blue";
    return;
  }

  function yellow() {
    document.getElementById("back").style.backgroundColor = "yellow";
    return;
  }

  function palevioletred() {
    document.getElementById("back").style.backgroundColor = "palevioletred";
    return;
  }
  function cyan() {
    document.getElementById("back").style.backgroundColor = "cyan";
    return;
  }
  function orange1() {
    document.getElementById("back").style.backgroundColor = "rgb(247, 173, 34)";
    return;
  }
  function orange2() {
    document.getElementById("back").style.backgroundColor = "rgb(255, 132, 0)";
    return;
  }
  function violet() {
    document.getElementById("back").style.backgroundColor = "rgb(208, 0, 255)";
    return;
  }
  function pink() {
    document.getElementById("back").style.backgroundColor = "pink";
    return;
  }
  function green() {
    document.getElementById("back").style.backgroundColor = "green";
    return;
  }
  function v2() {
    document.getElementById("back").style.backgroundColor =
      "rgb(150, 130, 238)";
    return;
  }
  function cyan2() {
    document.getElementById("back").style.backgroundColor = "rgb(0, 200, 200)";
    return;
  }
  function brown() {
    document.getElementById("back").style.backgroundColor = "brown";
    return;
  }
  function y2() {
    document.getElementById("back").style.backgroundColor =
      "rgba(242, 242, 0, 0.808)";
    return;
  }

  return (
    <div id="box" className="buttons">
      <button
        onClick={() => {
          red();
          hide();
        }}
        style={{ backgroundColor: "red" }}
      ></button>
      <button
        onClick={() => {
          greenyellow();
          hide();
        }}
        style={{ backgroundColor: "greenyellow" }}
      ></button>
      <button
        onClick={() => {
          blue();
          hide();
        }}
        style={{ backgroundColor: "blue" }}
      ></button>
      <button
        onClick={() => {
          yellow();
          hide();
        }}
        style={{ backgroundColor: "yellow" }}
      ></button>
      <button
        onClick={() => {
          palevioletred();
          hide();
        }}
        style={{ backgroundColor: "palevioletred" }}
      ></button>
      <button
        onClick={() => {
          cyan();
          hide();
        }}
        style={{ backgroundColor: "cyan" }}
      ></button>
      <button
        onClick={() => {
          orange1();
          hide();
        }}
        style={{ backgroundColor: "rgb(247, 173, 34)" }}
      ></button>
      <button
        onClick={() => {
          violet();
          hide();
        }}
        style={{ backgroundColor: "rgb(208, 0, 255)" }}
      ></button>
      <button
        onClick={() => {
          pink();
          hide();
        }}
        style={{ backgroundColor: "pink" }}
      ></button>
      <button
        onClick={() => {
          green();
          hide();
        }}
        style={{ backgroundColor: "green" }}
      ></button>
      <button
        onClick={() => {
          orange2();
          hide();
        }}
        style={{ backgroundColor: "rgb(255, 132, 0)" }}
      ></button>
      <button
        onClick={() => {
          cyan2();
          hide();
        }}
        style={{ backgroundColor: "rgb(0, 200, 200)" }}
      ></button>
      <button
        onClick={() => {
          brown();
          hide();
        }}
        style={{ backgroundColor: "brown" }}
      ></button>
      <button
        onClick={() => {
          v2();
          hide();
        }}
        style={{ backgroundColor: "rgb(150, 130, 238)" }}
      ></button>
      <button
        onClick={() => {
          y2();
          hide();
        }}
        style={{ backgroundColor: "rgba(242, 242, 0, 0.808)" }}
      ></button>
    </div>
  );
}
export default Clrs;

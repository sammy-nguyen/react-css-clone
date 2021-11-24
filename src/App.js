import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <img
        className="header"
        src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg"
        alt="background"
      ></img>

      <div className="navbar">
        <img
          className="logo"
          src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
          alt="logo"
        ></img>

        <ul>
          <li>
            <a href="#service">SERVICES</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#team">TEAM</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>

      <div className="para">
        <h2>Welcome To Our Studio!</h2>
        <h1>IT'S NICE TO MEET YOU</h1>
        <button className="btn">TELL ME MORE</button>
      </div>

      <div className="secondpart">
        <div className="para1">
          <h4>SERVICES</h4>
          <p id="service">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="row">
          <div className="column">
            <img
              className="cart"
              src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtc2hvcHBpbmctY2FydCBmYS13LTE4IGZhLXN0YWNrLTF4IGZhLWludmVyc2UiIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiBkYXRhLXByZWZpeD0iZmFzIiBkYXRhLWljb249InNob3BwaW5nLWNhcnQiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgZGF0YS1mYS1pMnN2Zz0iIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01MjguMTIgMzAxLjMxOWw0Ny4yNzMtMjA4QzU3OC44MDYgNzguMzAxIDU2Ny4zOTEgNjQgNTUxLjk5IDY0SDE1OS4yMDhsLTkuMTY2LTQ0LjgxQzE0Ny43NTggOC4wMjEgMTM3LjkzIDAgMTI2LjUyOSAwSDI0QzEwLjc0NSAwIDAgMTAuNzQ1IDAgMjR2MTZjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDY5Ljg4M2w3MC4yNDggMzQzLjQzNUMxNDcuMzI1IDQxNy4xIDEzNiA0MzUuMjIyIDEzNiA0NTZjMCAzMC45MjggMjUuMDcyIDU2IDU2IDU2czU2LTI1LjA3MiA1Ni01NmMwLTE1LjY3NC02LjQ0Ny0yOS44MzUtMTYuODI0LTQwaDIwOS42NDdDNDMwLjQ0NyA0MjYuMTY1IDQyNCA0NDAuMzI2IDQyNCA0NTZjMCAzMC45MjggMjUuMDcyIDU2IDU2IDU2czU2LTI1LjA3MiA1Ni01NmMwLTIyLjE3Mi0xMi44ODgtNDEuMzMyLTMxLjU3OS01MC40MDVsNS41MTctMjQuMjc2YzMuNDEzLTE1LjAxOC04LjAwMi0yOS4zMTktMjMuNDAzLTI5LjMxOUgyMTguMTE3bC02LjU0NS0zMmgyOTMuMTQ1YzExLjIwNiAwIDIwLjkyLTcuNzU0IDIzLjQwMy0xOC42ODF6Ii8+PC9zdmc+"
              alt="cartlogo"
            ></img>

            <h5>E-Commerce</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="column">
            <img
              className="cart"
              src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbGFwdG9wIGZhLXctMjAgZmEtc3RhY2stMXggZmEtaW52ZXJzZSIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0ibGFwdG9wIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDY0MCA1MTIiIGRhdGEtZmEtaTJzdmc9IiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNjI0IDQxNkgzODEuNTRjLS43NCAxOS44MS0xNC43MSAzMi0zMi43NCAzMkgyODhjLTE4LjY5IDAtMzMuMDItMTcuNDctMzIuNzctMzJIMTZjLTguOCAwLTE2IDcuMi0xNiAxNnYxNmMwIDM1LjIgMjguOCA2NCA2NCA2NGg1MTJjMzUuMiAwIDY0LTI4LjggNjQtNjR2LTE2YzAtOC44LTcuMi0xNi0xNi0xNnpNNTc2IDQ4YzAtMjYuNC0yMS42LTQ4LTQ4LTQ4SDExMkM4NS42IDAgNjQgMjEuNiA2NCA0OHYzMzZoNTEyVjQ4em0tNjQgMjcySDEyOFY2NGgzODR2MjU2eiIvPjwvc3ZnPg=="
              alt="cartlogo"
            ></img>
            <h5>Responsive Design</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="column">
            <img
              className="cart"
              src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbG9jayBmYS13LTE0IGZhLXN0YWNrLTF4IGZhLWludmVyc2UiIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiBkYXRhLXByZWZpeD0iZmFzIiBkYXRhLWljb249ImxvY2siIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgZGF0YS1mYS1pMnN2Zz0iIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00MDAgMjI0aC0yNHYtNzJDMzc2IDY4LjIgMzA3LjggMCAyMjQgMFM3MiA2OC4yIDcyIDE1MnY3Mkg0OGMtMjYuNSAwLTQ4IDIxLjUtNDggNDh2MTkyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFYyNzJjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xMDQgMEgxNTJ2LTcyYzAtMzkuNyAzMi4zLTcyIDcyLTcyczcyIDMyLjMgNzIgNzJ2NzJ6Ii8+PC9zdmc+"
              alt="security"
            ></img>
            <h5>Web Security</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
      <div className="para2">
        <h4>PORTFOLIO</h4>
        <p className="service">Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <section className="columns">
        <div className="column2">
          <img
            className="image"
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg"
            alt="watch"
          ></img>
          <h5>Threads</h5>
          <p className="service">Illustration</p>
        </div>

        <div className="column2">
          <img
            className="image"
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg"
            alt="watch"
          ></img>
          <h5>Explore</h5>
          <p className="service">Graphic Design</p>
        </div>

        <div className="column2">
          <img
            className="image"
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg"
            alt="watch"
          ></img>
          <h5>Finish</h5>
          <p className="service">Identity</p>
        </div>
      </section>

      <section className="columns">
        <div className="column2">
          <img
            className="image"
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg"
            alt="coca"
          ></img>
          <h5>Lines</h5>
          <p className="service">Branding</p>
        </div>

        <div className="column2">
          <img
            className="image"
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg"
            alt="laptop"
          ></img>
          <h5>Southwest</h5>
          <p className="service">Website Design</p>
        </div>

        <div className="column2">
          <img
            className="image"
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg"
            alt="chanel"
          ></img>
          <h5>Window</h5>
          <p className="service">Photography</p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;

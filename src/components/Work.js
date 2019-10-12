import React from "react";
import { TiDeviceDesktop } from "react-icons/ti";
import { GoMarkGithub } from "react-icons/go";

const Work = () => {
  return (
    <div>
      <section className="work" id="benu">
        <div className="title">Benu - HTML/CSS/SASS</div>
        <div className="card-right">
          <div className="description">
            <p>I remade this michellin 3-star restaurant's website.</p>
            <p>Since chef Corey Lee was one of my favorite chef,</p>
            <p>I decided to make my own version of it.</p>
            <p>
              This is a <span className="hl">fully responsive app</span> with
              fun animations.
            </p>
            <p>
              Also, you can check location by
              <span className="hl"> google map api.</span>
            </p>
          </div>
          <div className="screenshot">
            <div className="img-benu"></div>
            <div className="buttons">
              <a href="">
                <TiDeviceDesktop /> Live
              </a>
              <a href="">
                <GoMarkGithub /> Source
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="title">Budget - Javascript/Firestore</div>
        <div className="card-left">
          <div className="description">
            <p>
              This is <span className="hl">a real-world app with database</span>
            </p>
            <p>You can input budget and expense by choosing one of buttons</p>
            <p>Balance will be calculated automatically</p>
            <p>Also, It has delete and reset functionality</p>
          </div>
          <div className="screenshot">
            <div className="img-budget"></div>
            <div className="buttons">
              <a href="">
                <TiDeviceDesktop /> Live
              </a>
              <a href="">
                <GoMarkGithub /> Source
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="title">My Tap - Javascript/Firestore/Sass</div>
        <div className="card-right">
          <div className="description">
            <p>This app is inspired by momentum which is chrome extension.</p>
            <p>
              This includes <span className="hl">weather and quote api.</span>{" "}
              So you get new weather and quote every single time.
            </p>
            <p>
              You can <span className="hl">choose between todo and event</span>{" "}
              and hide them Also{" "}
              <span className="hl">make it done by toggling.</span>
            </p>
            <p>
              You can add/update/delete and It reads real-time database -{" "}
              <span className="hl">fully CRUD app.</span>{" "}
            </p>
          </div>
          <div className="screenshot">
            <div className="img-myTab"></div>
            <div className="buttons">
              <a href="">
                <TiDeviceDesktop /> Live
              </a>
              <a href="">
                <GoMarkGithub /> Source
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="title">Hotspur Talk - React/Redux/Firebase</div>
        <div className="card-left">
          <div className="description">
            <p>This is a simple social media app for Hotspur team and</p>
            <p>
              <span className="hl">Full stack app</span> with React and
              Firebase.
            </p>
            <p>
              I used firebase for{" "}
              <span className="hl">auth, database, storage and hosting.</span>
            </p>
            <p>You can see upcoming matches by football data api.</p>
            <p>
              Also, when you sign up or post,{" "}
              <span className="hl">Realtime notification</span> will know it.
            </p>
          </div>
          <div className="screenshot">
            <div className="img-hotspur"></div>
            <div className="buttons">
              <a href="">
                <TiDeviceDesktop /> Live
              </a>
              <a href="">
                <GoMarkGithub /> Source
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="title">Portfolio - React</div>
        <div className="card-right">
          <div className="description">
            <p>
              I tried my best not to make it complicated but simple and clean.
            </p>
            <p>It has cool hamburger nav and curved shape template.</p>
          </div>
          <div className="screenshot">
            <div className="img-portfol"></div>
            <div className="buttons">
              <a href="">
                <GoMarkGithub /> Source
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;

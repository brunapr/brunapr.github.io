import './styles.css';

export default function About() {
  return(
    <div id="about" className="slide-child-wrapper">
      <div className="about-me-wrapper">
        <div className="who-i-am">
          <h1>Who I am</h1>
          <div>
            <div className="basic-info">
              <div className="basic-info-content">
                <h6>Basic</h6>
                <span>— &nbsp; Bruna Ribeiro</span>
                <span>— &nbsp; 22 anos</span>
                <span>— &nbsp; Brasil</span>
                <span>— &nbsp; Rio de Janeiro, RJ</span>
                <span>— &nbsp; Sagitário</span>
                <span>— &nbsp; Ela/Dela</span>
              </div>
              <div className="who-i-am-img-wrapper"/>
            </div>
            <div className="history-info">
              <h6>History</h6>
              <p className="history-text">
                I’m a <b>front-end developer</b> and <b>UI/UX designer </b> 
                born in Brazil, Rio de Janeiro - RJ.
                <br/>
                Even though I was familiar with HTML/CSS since I was a teenager, I
                only truly started to learn front-end when I was 19 years old,
                after joining <b>EJCM</b>, a Junior Enterprise at my university, <b>UFRJ</b>.
                <br/><br/>
                I loved it from the start! For me, to see everything coming
                together with my code was like <b>magic</b>! 
              </p>
            </div>
            <div className="passion-info">
              <h6>Passion</h6>
              <div className="passion-list">
                <div className="passion-first">
                  <div className="passion-item">
                    <span>👾</span>
                    <span className="tooltiptext">pixel art</span>
                  </div>
                  <div className="passion-item">
                    <span>🎨</span>
                    <span className="tooltiptext">design</span>
                  </div>
                  <div className="passion-item">
                    <span>🦜</span>
                    <span className="tooltiptext">my pets</span>
                  </div>
                  <div className="passion-item">
                    <span>🎮</span>
                    <span className="tooltiptext">games</span>
                  </div>
                  <div className="passion-item">
                    <span>🔮</span>
                    <span className="tooltiptext">tarot</span>
                  </div>
                  <div className="passion-item">
                    <span>🍰</span>
                    <span className="tooltiptext">desserts</span>
                  </div>
                </div>
                {/* <div className="passion-second">
                  <div className="passion-item">
                    <span>🎮</span>
                    <span className="tooltiptext">games</span>
                  </div>
                  <div className="passion-item">
                    <span>🔮</span>
                    <span className="tooltiptext">tarot</span>
                  </div>
                  <div className="passion-item">
                    <span>🍰</span>
                    <span className="tooltiptext">desserts</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="skillset">
          <h1>Skills</h1>
          <div>
            <div className="skillset-icons">
              <div className="icons-row">
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/html.png")}/>
                  </div>
                  <span className="tooltiptext">html</span>
                </div>
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/css.png")}/>
                  </div>
                  <span className="tooltiptext">css</span>
                </div>
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/figma.png")}/>
                  </div>
                  <span className="tooltiptext">figma</span>
                </div>
              </div>
              <div className="icons-row">
                <div className="skillset-icon">
                 <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/react.png")}/>
                  </div>
                  <span className="tooltiptext">react native</span>
                </div>
                <div className="skillset-icon">
                 <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/react.png")}/>
                  </div>
                  <span className="tooltiptext">react js</span>
                </div>
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/vue.png")}/>
                  </div>
                  <span className="tooltiptext">vue</span>
                </div>
              </div>
              <div className="icons-row">
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/ionic.png")}/>
                  </div>
                  <span className="tooltiptext">ionic</span>
                </div>
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/angular.png")}/>
                  </div>
                  <span className="tooltiptext">angular</span>
                </div>
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/flutter.png")}/>
                  </div>
                  <span className="tooltiptext">flutter</span>
                </div>
              </div>
              <div className="icons-row">
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/js.png")}/>
                  </div>
                  <span className="tooltiptext">javascript</span>
                </div>
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/laravel.png")}/>
                  </div>
                  <span className="tooltiptext">laravel</span>
                </div>
                <div className="skillset-icon">
                  <div className="skillset-icon-wrapper">
                    <img src={require("../../assets/skills/node.png")}/>
                  </div>
                  <span className="tooltiptext">node js</span>
                </div>
              </div>
              <div className="skillset-gif-wrapper"/>
            </div>
            <div className="skillset-img-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
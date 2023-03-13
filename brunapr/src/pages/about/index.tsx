import { useContext } from 'react';
import { LanguageContext } from '../../contexts/languageContext';
import Translate from '../../utils/translate';
import './styles.css';

export default function About() {

  const { language } = useContext(LanguageContext);

  return(
    <div id="about" className="slide-child-wrapper">
      <div className="about-me-wrapper">
        <div className="who-i-am">
          <h1>{Translate("who i am")}</h1>
          <div>
            <div className="basic-info">
              <div className="basic-info-content">
                <h6>{Translate("basic")}</h6>
                <span>— &nbsp; Bruna Ribeiro</span>
                <span>— &nbsp; {Translate("22 years old")}</span>
                <span>— &nbsp; {Translate("brazil")}</span>
                <span>— &nbsp; Rio de Janeiro, RJ</span>
                <span>— &nbsp; {Translate("sagittarius")}</span>
                <span>— &nbsp; {Translate("she/her")}</span>
              </div>
              <div className="who-i-am-img-wrapper"/>
            </div>
            <div className="history-info">
              <h6>{Translate("how it started")}</h6>
              {
                language == "pt" ?
                <p className="history-text">
                  Eu sou uma <b>desenvolvedora front-end</b> e <b>designer de UI/UX </b> 
                  nascida no Brasil, Rio de Janeiro - RJ.
                  <br/>
                  Apesar de já conhecer HTML/CSS desde adolescente, eu
                  apenas comecei a aprender front-end com 19 anos após entrar
                  na <b>EJCM</b>, uma Empresa Júnior da minha faculdade, <b>UFRJ</b>.
                  <br/><br/>
                  Amei muito desde o começo! Para mim, ver tudo se encaixando
                  junto no código é como <b>mágica</b>! 
                </p> :
                  <p className="history-text">
                  I’m a <b>front-end developer</b> and <b>UI/UX designer </b> 
                  born in Brazil, Rio de Janeiro - RJ.
                  <br/>
                  Even though I was familiar with HTML/CSS since I was a teenager, I
                  only truly started to learn front-end when I was 19 years old,
                  after joining <b>EJCM</b>, a Junior Enterprise at my university, <b>UFRJ</b>.
                  <br/><br/>
                  I loved it from the start! For me, to see everything coming
                  together with my code is like <b>magic</b>! 
                </p>
              }
            </div>
            <div className="passion-info">
              <h6>{Translate("love")}</h6>
              <div className="passion-list">
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
                  <span className="tooltiptext">{Translate("my pets")}</span>
                </div>
                <div className="passion-item">
                  <span>🎮</span>
                  <span className="tooltiptext">{Translate("games")}</span>
                </div>
                <div className="passion-item">
                  <span>🔮</span>
                  <span className="tooltiptext">tarot</span>
                </div>
                <div className="passion-item">
                  <span>🍰</span>
                  <span className="tooltiptext">{Translate("desserts")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skillset">
          <h1>Skills</h1>
          <div>
            <div className="skillset-icons">
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
              {/* <div className="icons-row">
              </div> */}
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
              {/* <div className="icons-row">
              </div> */}
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
              {/* <div className="icons-row">
              </div> */}
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
              {/* <div className="icons-row">
              </div> */}
            </div>
            <div className="skillset-gif-wrapper">
              <div className="gif-wrapper-aux"></div>
              <img src={require("../../assets/images/cube.gif")}/>
              <div className="gif-wrapper-aux"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
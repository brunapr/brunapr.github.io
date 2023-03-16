import { ImageList, ImageListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import Hover from '../../components/cursor';
import Translate from '../../utils/translate';
import projects, { IProjectData } from '../../utils/projects';
import './styles.css';

export default function Projects() {
  const [ tab, setTab ] = useState(1);

  function shuffleProjects() {
    for (var i = projects.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = projects[i];
        projects[i] = projects[j];
        projects[j] = temp;
    }
  }

  useEffect(() => {
    shuffleProjects();
  }, [])

  const ProjectsList = (props: {item: IProjectData}) => {
    return(
      <ImageListItem key={props.item.name}>
        <div className="list-item-wrapper">
          <Hover>
            <img
              src={require(`../../assets/projects/${props.item.src}.png`)}
              loading="lazy"
            />
            <div className="list-item-bottom-placeholder">
              <span>{props.item.name}</span>
            </div>
            <div className="list-item-bottom">
              <span>{props.item.name}</span>
              <span className="item-tag">[{props.item.tag}]</span>
              <span className="item-description">{Translate(props.item.src)}</span>
            </div>
          </Hover>
        </div>
      </ImageListItem>
    );
  }

  return(
    <div id="projects" className="slide-child-wrapper">
      <div className="projects-wrapper">
        <h1>{Translate("projects")}</h1>
        <div>
          <div className="projects-tab">
            <Hover style={{padding: 10, paddingTop: 0, paddingLeft: 0}}>
              <div 
                className="tab-button"
                onClick={() => {setTab(1)}}
              >
                <span className={`${tab == 1 && "active-tab"}`}>{Translate("all")}</span>
              </div>
            </Hover>
            <Hover style={{padding: 10, paddingTop: 0}}>
              <div
                className="tab-button"
                onClick={() => {setTab(2)}}
              >
                <span className={`${tab == 2 && "active-tab"}`}>App</span>
              </div>
            </Hover>
            <Hover style={{padding: 10, paddingTop: 0}}>
              <div               
                className="tab-button"
                onClick={() => {setTab(3)}}
              >
                <span className={`${tab == 3 && "active-tab"}`}>Web</span>
              </div>
            </Hover>
            <Hover style={{padding: 10, paddingTop: 0}}>
              <div               
                className="tab-button"
                onClick={() => {setTab(4)}}
              >
                <span className={`${tab == 4 && "active-tab"}`}>Ui/Ux</span>
              </div>
            </Hover>
          </div>
          <div className="projects-list">
            <ImageList variant="masonry" cols={3} gap={40}>
            {
              tab == 1 &&
              projects.map((index: IProjectData) => (
                <ProjectsList item={index}/>
              ))
            }
            {
              tab == 2 &&
              projects.filter((item) => {
                  return item.tag == "app";
              }).map((index) => (
                <ProjectsList item={index}/>
              ))
            }
            {
              tab == 3 &&
              projects.filter((item) => {
                  return item.tag == "web";
              }).map((index) => (
                <ProjectsList item={index as IProjectData}/>
              ))
            }
            {
              tab == 4 &&
              projects.filter((item) => {
                  return item.tag == "ui/ux";
              }).map((index) => (
                <ProjectsList item={index as IProjectData}/>
              ))
            }
            </ImageList>
          </div>
        </div>
      </div>
    </div>
  );
}
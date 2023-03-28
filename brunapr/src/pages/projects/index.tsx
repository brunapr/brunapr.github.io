import { ImageList, ImageListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import Hover from '../../components/cursor';
import Translate from '../../utils/translate';
import projects, { IProjectData } from '../../utils/projects';
import './styles.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Projects() {
  const [ tab, setTab ] = useState(1);
  const [ cols, setCols ] = useState(3);
  const [ clicked, setClicked ] = useState(0);
  const { width } = useWindowDimensions();

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

  useEffect(() => {
    if(width <= 700) {
      setCols(1);
    } else if(width <= 900 && width > 700) {
      setCols(2);
    } else if(width > 900) {
      setCols(3);
    }
  }, [width])

  useEffect(()=>{
    const element = document.getElementById(`project${clicked}`);

    setTimeout(() => {
      if(element) {
        if(element.classList.length > 1) {
          element.classList.remove("project-expand");
        } else {
          element.classList.add("project-expand");
        }
      }
    }, 100)
  }, [clicked]);

  const ProjectsList = (props: {item: IProjectData}) => {
    return(
      <ImageListItem key={props.item.name}>
        <div
          className="list-item-wrapper" 
          onClick={() => { clicked == props.item.id ? setClicked(0) : setClicked(props.item.id) }}>
          <Hover>
            <img
              src={require(`../../assets/projects/${props.item.src}.png`)}
              loading="lazy"
            />
            {/* <div className="list-item-bottom-placeholder">
              <span>{props.item.name}</span>
            </div> */}
            <div id={`project${props.item.id}`} className="list-item-bottom">
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
            <ImageList variant="masonry" cols={cols} gap={40}>
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
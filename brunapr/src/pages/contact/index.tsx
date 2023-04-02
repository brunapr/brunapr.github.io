import { useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { RxCopy } from 'react-icons/rx';
import Hover from '../../components/cursor';
import Translate from '../../utils/translate';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './styles.css';

export default function Contact() {

  const [ isCopied, setIsCopied ] = useState(false);
  const { width } = useWindowDimensions();

  function handleOnCopy(text: string) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  }

  return(
    <div id="contact" className="slide-child-wrapper">
      <div className="copy-alert">
        {Translate("copied!")}
      </div>
      <h1 className="contact-title">{Translate("contact")}</h1>
      <div className="contact-wrapper">
        <div className="contact-texts">
          <div>
            <span>brunapr@ic.ufrj.br</span>
            <Hover>
              <div 
                className="contact-text-link"
                onClick={() => { handleOnCopy("brunapr@ic.ufrj.br") }}
              >
                <RxCopy size={20}/>
                {
                  isCopied ?
                  <span className="tooltiptext">{Translate("copied!")}</span> :
                  <span className="tooltiptext">{Translate("copy")}</span>
                }
              </div>
            </Hover>
          </div>
          <div>
            <span>{Translate("curriculum")}.pdf</span>
            <Hover>
              <a
                className="contact-text-link"
                href={require(`../../assets/cv/${Translate("curriculum")}.pdf`)}
                download={Translate("curriculum")}
              >
                <HiDownload size={20}/>
                <span className="tooltiptext">download</span>
              </a>
            </Hover>
          </div>
        </div>
      </div>
    </div>
  );
}
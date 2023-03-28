import './styles.css';

import { HiOutlineMail, HiDownload } from 'react-icons/hi';
import { RxDiscordLogo, RxCopy } from 'react-icons/rx';
import { FaWhatsapp } from 'react-icons/fa';
import Hover from '../../components/cursor';
import Translate from '../../utils/translate';
import { useState } from 'react';

export default function Contact() {

  const [ isCopied, setIsCopied ] = useState(false);

  function handleOnCopy(text: string) {
    navigator.clipboard.writeText(text);
    setIsCopied(!isCopied);
  }

  return(
    <div id="contact" className="slide-child-wrapper">
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
        {/* <div className="contact-links">
          <Hover>
            <div className="round-link">
              <HiOutlineMail size={24}/>
              <span className="tooltiptext">{Translate("open")}</span>
            </div>
          </Hover>
          <Hover>
            <div 
              className="round-link"
              onClick={() => { handleOnCopy("+5521998539837") }}
            >
              <FaWhatsapp size={24}/>
              <span className="tooltiptext">{tooltip}</span>
            </div>
          </Hover>
          <Hover>
            <div 
              className="round-link"
              onClick={() => { handleOnCopy("Seth#0143") }}
            >
              <RxDiscordLogo size={24}/>
              <span className="tooltiptext">{tooltip}</span>
            </div>
          </Hover>
        </div> */}
      </div>
    </div>
  );
}
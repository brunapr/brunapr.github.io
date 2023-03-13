import './styles.css';

import { HiOutlineMail, HiDownload } from 'react-icons/hi';
import { RxDiscordLogo, RxCopy } from 'react-icons/rx';
import { FaWhatsapp } from 'react-icons/fa';
import Hover from '../../components/cursor';
import Translate from '../../utils/translate';

export default function Contact() {
  return(
    <div id="contact" className="slide-child-wrapper">
      <h1 className="contact-title">{Translate("contact")}</h1>
      <div className="contact-wrapper">
        <div className="contact-texts">
          <div>
            <span>brunapr@ic.ufrj.br</span>
            <Hover>
              <div className="contact-text-link">
                <RxCopy size={20}/>
                <span className="tooltiptext">{Translate("copy")}</span>
              </div>
            </Hover>
          </div>
          <div>
            <span>{Translate("curriculum")}.pdf</span>
            <Hover>
              <div className="contact-text-link">
                <HiDownload size={20}/>
                <span className="tooltiptext">download</span>
              </div>
            </Hover>
          </div>
        </div>
        <div className="contact-links">
          <Hover>
            <div className="round-link">
              <HiOutlineMail size={24}/>
              <span className="tooltiptext">{Translate("open")}</span>
            </div>
          </Hover>
          <Hover>
            <div className="round-link">
              <FaWhatsapp size={24}/>
              <span className="tooltiptext">{Translate("copy")}</span>
            </div>
          </Hover>
          <Hover>
            <div className="round-link">
              <RxDiscordLogo size={24}/>
              <span className="tooltiptext">{Translate("copy")}</span>
            </div>
          </Hover>
        </div>
      </div>
    </div>
  );
}
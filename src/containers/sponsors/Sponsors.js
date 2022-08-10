import Content from "../commons/Content";
import govTechLogo from "../../assets/govTechLogo.png";
import SITLogo from "../../assets/SITLogo.png";

export default function Sponsors() {
  return (
    <div id="sponsors">
      <Content title="Sponsors">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <a
            href="https://www.tech.gov.sg/careers/students-and-graduates/"
            target="_blank"
          >
            <img src={govTechLogo} className="h-32 my-4 md:mb-0"></img>
          </a>
          <a href="https://www.singaporetech.edu.sg/" target="_blank">
            <img src={SITLogo} className="h-28 my-4 md:mb-0"></img>
          </a>
        </div>
      </Content>
    </div>
  );
}

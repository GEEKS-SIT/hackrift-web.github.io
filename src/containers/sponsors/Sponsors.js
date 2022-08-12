import Content from "../commons/Content";
import govTechLogo from "../../assets/govTechLogo.png";
import SITLogo from "../../assets/SITLogo.png";

export default function Sponsors() {
  return (
    <div id="sponsors">
      <Content title="Sponsors">
        {/* pl cause sit logo too big. */}
        <div className="flex flex-col md:flex-row justify-around items-center md:pl-32">
          <a
            href="https://www.tech.gov.sg/careers/students-and-graduates/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={govTechLogo} alt="" className="h-40 lg:h-64 my-4 md:mb-0"></img>
          </a>
          <a
            href="https://www.singaporetech.edu.sg/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SITLogo} alt="" className="h-40 lg:h-52 my-4 md:mb-0"></img>
          </a>
        </div>
      </Content>
    </div>
  );
}

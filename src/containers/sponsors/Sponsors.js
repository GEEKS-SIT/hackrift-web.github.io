import Content from "../commons/Content";
import govTechLogo from "../../assets/govTechLogo.png";
import SITLogo from "../../assets/SITLogo.png";

export default function Sponsors() {
	return (
		<div id="sponsors">
			<Content title="Sponsors">
				<p>GovTech Logo and maybe writeup here</p>
				<div className="flex flex-wrap justify-center items-center">
					<a
						href="https://www.tech.gov.sg/careers/students-and-graduates/"
						target="_blank"
					>
						<img src={govTechLogo} className="my-5 mx-5"></img>
					</a>
					<a href="https://www.singaporetech.edu.sg/" target="_blank">
						<img src={SITLogo} className="my-5 mx-5"></img>
					</a>
				</div>
			</Content>
		</div>
	);
}

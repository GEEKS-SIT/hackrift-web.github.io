import Content from "../commons/Content";

export default function Schedule() {
	return (
		<div id="schedule">
			<Content title="Schedule">
				<table className="w-full font-sans table-auto">
					<thead>
						<tr>
							<th colSpan="3">Day 1: Friday, 14 October 2022</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-y-2 border-primary">
							<td>7:00pm</td>
							<td>8:00pm</td>
							<td>Opening ceremony</td>
						</tr>
						<tr className="border-y-2 border-primary">
							<td>8:00pm</td>
							<td>8:30pm</td>
							<td>Consultation Session via Zoom #1</td>
						</tr>
						<tr>
							<th colSpan="3">
								Day 2: Saturday, 15 October 2022
							</th>
						</tr>
						<tr className="border-y-2 border-primary">
							<td>2:00pm</td>
							<td>4:00pm</td>
							<td>Consultation Session via Zoom #2</td>
						</tr>
						<tr>
							<th colSpan="3">Day 3: Sunday, 16 October 2022</th>
						</tr>
						<tr className="border-y-2 border-primary">
							<td>2:30pm</td>
							<td>~6:30pm</td>
							<td>
								Presentations (8mins presentation, 2mins Q&A)
							</td>
						</tr>
						<tr className="border-y-2 border-primary">
							<td>7:00pm</td>
							<td>~7:30pm</td>
							<td>Speaker session</td>
						</tr>
						<tr className="border-y-2 border-primary">
							<td colSpan="2">7:30pm</td>
							<td>HR Recruitment Talk</td>
						</tr>
						<tr className="border-y-2 border-primary">
							<td colSpan="2">7:45pm</td>
							<td>Closing Ceremony</td>
						</tr>
					</tbody>
				</table>
			</Content>
		</div>
	);
}

import Content from "../commons/Content";

export default function Schedule() {
	return (
		<div id="schedule">
			<Content title="Schedule">
				<table class="table-auto">
					<thead>
						<tr>
							<th>Day</th>
							<th>Description</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="2" class="border-2 border-primary px-8 py-4">Day 1</td>
							<td class="border-2 border-primary px-8 py-4">Opening ceremony</td>
							<td class="border-2 border-primary px-8 py-4">7:00pm - 8:00pm</td>
						</tr>
						<tr>
							<td class="border-2 border-primary px-8 py-4">Consultation Session via Zoom #1</td>
							<td class="border-2 border-primary px-8 py-4">8:00pm - 8:30pm</td>
						</tr>
						<tr>
							<td class="border-2 border-primary px-8 py-4">Day 2</td>
							<td class="border-2 border-primary px-8 py-4">Consultation Session via Zoom #2</td>
							<td class="border-2 border-primary px-8 py-4">2:00pm - 4:00pm</td>
						</tr>
						<tr>
							<td rowspan="4" class="border-2 border-primary px-8 py-4">Day 3</td>
							<td class="border-2 border-primary px-8 py-4">Presentations  (8mins presentation, 2mins Q&A)</td>
							<td class="border-2 border-primary px-8 py-4">2:30pm - ~6:30pm</td>
						</tr>
						<tr>
							<td class="border-2 border-primary px-8 py-4">Speaker session</td>
							<td class="border-2 border-primary px-8 py-4">7:00pm - ~7:30pm</td>
						</tr>
						<tr>
							<td class="border-2 border-primary px-8 py-4">HR Recruitment Talk</td>
							<td class="border-2 border-primary px-8 py-4">7:30pm</td>
						</tr>
						<tr>
							<td class="border-2 border-primary px-8 py-4">Closing Ceremony (Announce winners)</td>
							<td class="border-2 border-primary px-8 py-4">7:45pm</td>
						</tr>
					</tbody>
				</table>
			</Content>
		</div>
	);
}

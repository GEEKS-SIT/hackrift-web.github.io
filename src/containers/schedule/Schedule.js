import Content from "../commons/Content";

export default function Schedule() {
  return (
    <div id="schedule">
      <Content title="Schedule">
        <div className="overflow-x-auto w-full rounded-2xl">
          <table className="table w-full text-sm md:text-lg">
            <thead>
              <tr>
                <th>Event</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Day 1</td>
                <td></td>
              </tr>
              <tr>
                <td>Opening Ceremony</td>
                <td>7:00pm - 8:00pm</td>
              </tr>
              <tr>
                <td>Consultation Session 1</td>
                <td>8:00pm - 10:00pm</td>
              </tr>
              <tr>
                <td className="font-bold">Day 2</td>
                <td></td>
              </tr>
              <tr>
                <td>Consultation Session 2</td>
                <td>2:00pm - 4:00pm</td>
              </tr>
              <tr>
                <td className="font-bold ">Day 3</td>
                <td></td>
              </tr>
              <tr>
                <td>Submission</td>
                <td>1:00pm</td>
              </tr>
              <tr>
                <td>Speaker Session</td>
                <td>7:00pm - 7:30pm</td>
              </tr>
              <tr>
                <td>Presentations </td>
                <td>2:30pm - 6:30pm</td>
              </tr>
              <tr>
                <td>HR Recruitment Talk</td>
                <td>7:30pm - 7:45pm</td>
              </tr>
              <tr>
                <td>Closing Ceremony</td>
                <td>7:45pm - 8:00pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Content>
    </div>
  );
}

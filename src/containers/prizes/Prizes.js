import Content from "../commons/Content";

export default function Prizes() {
	return (
		<div id="prizes">
			<Content title="Prizes">
				<div className="my-4">
					<p className="text-5xl text-center">🥇 Champion 🥇</p>
					<p className="text-3xl text-center">$1500 Cash Voucher</p>
				</div>
        <div className="my-4">
					<p className="text-5xl text-center">🥈 First Runner Up 🥈</p>
					<p className="text-3xl text-center">$1000 Cash Voucher</p>
				</div>
        <div className="my-4">
					<p className="text-5xl text-center">🥉 Second Runner Up 🥉</p>
					<p className="text-3xl text-center">$500 Cash Voucher</p>
				</div>
        <div className="my-4">
					<p className="text-5xl text-center">💻 Best UX/UI 💻</p>
					<p className="text-3xl text-center">$325 Cash Voucher</p>
				</div>
        <div className="my-4">
					<p className="text-5xl text-center">🗣 Best Pitch 🗣</p>
					<p className="text-3xl text-center">$325 Cash Voucher</p>
				</div>
			</Content>
		</div>
	);
}

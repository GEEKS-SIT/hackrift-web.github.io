import Content from "../commons/Content";

export default function Prizes() {
  return (
    <div id="prizes">
      <Content title="Prizes">
        <div className="w-full flex-row md:flex-col">
          {/* Cards Containers */}
          <div className="flex flex-col md:flex-row mx-auto md:mb-8">
            <div className="card w-full md:w-96 bg-base-100 shadow-md hover:shadow-xl transition md:mr-8 mb-4 md:mb-0">
              <div className="card-body justify-center">
                <p className="font-bold text-3xl text-primary w-full text-center flex-none">
                  S$ 1,500 cash
                </p>
                <h2 className="card-title flex-none w-full justify-center">
                  <p className="text-3xl flex-none ">🥇</p>
                  <p className="flex-none">Champions</p>
                </h2>
              </div>
            </div>
            <div className="card w-full md:w-96 bg-base-100 shadow-md hover:shadow-xl transition md:mr-8 mb-4 md:mb-0">
              <div className="card-body justify-center">
                <p className="font-bold text-3xl text-primary w-full text-center flex-none">
                  S$ 1,000 cash
                </p>
                <h2 className="card-title flex-none w-full justify-center">
                  <p className="text-3xl flex-none ">🥈</p>
                  <p className="flex-none">1st Runner-ups</p>
                </h2>
              </div>
            </div>
            <div className="card w-full md:w-96 bg-base-100 shadow-md hover:shadow-xl transition mb-4 md:mb-0">
              <div className="card-body justify-center">
                <p className="font-bold text-3xl text-primary w-full text-center flex-none">
                  S$ 500 cash
                </p>
                <h2 className="card-title flex-none w-full justify-center">
                  <p className="text-3xl flex-none ">🥉</p>
                  <p className="flex-none">2nd Runner-ups</p>
                </h2>
              </div>
            </div>
          </div>
          {/* Cards Containers */}
          <div className="flex flex-col md:flex-row mx-auto justify-center">
            <div className="card w-full md:w-96 bg-base-100 shadow-md hover:shadow-xl transition md:mr-8 mb-4 md:mb-0">
              <div className="card-body justify-center">
                <p className="font-bold text-3xl text-primary w-full text-center flex-none">
                  S$ 325 cash
                </p>
                <h2 className="card-title flex-none w-full justify-center">
                  <p className="text-3xl flex-none ">🎨</p>
                  <p className="flex-none"> Best UX/UI</p>
                </h2>
              </div>
            </div>
            <div className="card w-full md:w-96 bg-base-100 shadow-md hover:shadow-xl transition mb-4 md:mb-0">
              <div className="card-body justify-center">
                <p className="font-bold text-3xl text-primary w-full text-center flex-none">
                  S$ 325 cash
                </p>
                <h2 className="card-title flex-none w-full justify-center">
                  <p className="text-3xl flex-none ">🎙</p>
                  <p className="flex-none"> Best Pitch</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}

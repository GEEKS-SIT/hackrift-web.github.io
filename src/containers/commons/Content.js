export default function Content(props) {
  return (
    <div className="pb-8 lg:py-16">
      <div className="px-4 lg:px-0">
        <h1>
          <span className="text-3xl text-center font-extrabold text-primary sm:text-4xl">
            <span className="block mb-8">{props.title}</span>
          </span>
        </h1>
        <div className="text-xl font-semibold mx-auto flex flex-col sm:text-2xl lg:text-3xl ">
          {props.children}
        </div>
      </div>
    </div>
  );
}

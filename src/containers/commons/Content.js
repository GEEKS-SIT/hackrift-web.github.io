export default function Content(props) {
  return (
    <div className="py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="text-3xl text-center font-extrabold tracking-tight text-primary sm:text-4xl">
            <span class="block">{props.title}</span>
            </span>
            {props.children}
          </h1>
        </div>
      </div>
    </div>
  );
}

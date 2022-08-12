import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 navbar bg-beige opacity-95 z-50 py-4 transition-all duration-200 ease-out"
      id="navbar"
    >
      <div className="navbar-start justify-between grow md:grow-none lg:justify-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about" className="btn btn-ghost btn-lg leading-none">
                About
              </a>
            </li>
            <li>
              <a href="#schedule" className="btn btn-ghost btn-sm leading-none">
                Schedule
              </a>
            </li>
            <li>
              <a href="#prizes" className="btn btn-ghost btn-sm leading-none">
                Prizes
              </a>
            </li>
            <li>
              <a href="#sponsors" className="btn btn-ghost btn-sm leading-none">
                Sponsors
              </a>
            </li>
            <li>
              <a href="#FAQ" className="btn btn-ghost btn-sm leading-none">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-primary lg:hidden"
          href="https://forms.gle/gXjE8Q3a35VwVpjY7"
        >
          Join the Hackathon
        </a>
        <a href="#top" className="btn-link btn px-0">
          <img src={logo} className="mr-3 h-6 sm:h-6" alt="HackRift Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  p-0">
          <li>
            <a href="#about" className="btn btn-ghost mr-2">
              About
            </a>
          </li>
          <li>
            <a href="#schedule" className="btn btn-ghost mr-2">
              Schedule
            </a>
          </li>
          <li>
            <a href="#prizes" className="btn btn-ghost mr-2">
              Prizes
            </a>
          </li>
          <li>
            <a href="#sponsors" className="btn btn-ghost mr-2">
              Sponsors
            </a>
          </li>
          <li>
            <a href="#FAQ" className="btn btn-ghost">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <a
          className="btn btn-primary"
          href="https://forms.gle/gXjE8Q3a35VwVpjY7"
        >
          Join the Hackathon
        </a>
      </div>
    </nav>
  );
}

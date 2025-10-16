import "./Gearbox.css";

const Gearbox = ({ value }) => (
  <div className="gearbox">
    <svg
      className="gearbox__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#90A3BF"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.53 2 12 2Z"
      />
      <rect width={16} height={16} x={4} y={4} fill="#fff" rx={8} />
      <path
        fill="#90A3BF"
        d="M12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6Z"
      />
      <rect width={8} height={8} x={8} y={8} fill="#fff" rx={4} />
      <path fill="#90A3BF" d="M11 17h2v4h-2zM17 11h4v2h-4zM3 11h4v2H3z" />
    </svg>
    <div className="gearbox__text">{value}</div>
  </div>
);
export default Gearbox;

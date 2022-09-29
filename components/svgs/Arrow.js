const Arrow = (props) => {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.199219 13.5998V10.3998H19.3992L12.9992 3.9998L14.5992 0.799805L25.7992 11.9998L14.5992 23.1998L12.9992 19.9998L19.3992 13.5998H0.199219Z"
        fill={props.color}
      />
    </svg>
  );
};

export default Arrow;

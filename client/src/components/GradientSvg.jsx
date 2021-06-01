function Svg(props) {
    return(
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 825.7 410.2"
    >
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={31.92}
        y1={212.684}
        x2={825.727}
        y2={212.684}
      >
        <stop offset={0} stopColor={props.leftColor} />
        <stop offset={1} stopColor={props.rightColor} />
      </linearGradient>
      <path
        opacity={0.2}
        fill="url(#prefix__a)"
        d="M527.4 124.5l76.3 189v96.7h-24.1l-52.3-141.6V124.5zm139.8 216l90.1-245v314.7h68.5V16.1h-49.9c-23.1 0-43.8 14.1-52.3 35.5l-56.4 142.3v146.6zM31.9 15.2v394.1h12.8c31.1 0 56.2-25.2 56.2-56.2l-.1-337.8H31.9zm132.5 252.4l52.3 141.6h24.1v-96.7l-76.3-189v144.1zm139.8 72l90.1-245v314.7h12.6c30.8 0 55.9-25 55.9-55.9V15.2h-53.1c-21.1 0-40.1 12.9-47.9 32.5L304.2 193v146.6z"
      />
      <linearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={197.507}
        x2={793.808}
        y2={197.507}
      >
        <stop offset={0} stopColor={props.leftColor} />
        <stop offset={1} stopColor={props.rightColor} />
      </linearGradient>
      <path
        fill="url(#prefix__b)"
        d="M495.4 109.3l76.3 189V395h-24.1l-52.3-141.6V109.3zM0 0v394.1h13.1c30.9 0 55.9-25 55.9-55.9V0H0zm635.3 325.3l90.1-245V395h68.5V1H744c-23.1 0-43.8 14.1-52.3 35.5l-56.4 142.3v146.5zm-502.8-72.8l52.3 141.6h24.1v-96.7l-76.3-189v144.1zm139.8 71.9l90.1-245v314.7h12.7c30.8 0 55.7-25 55.7-55.7V0H379c-21.9 0-41.6 13.4-49.7 33.8l-57.1 144v146.6z"
      />
    </svg>
    )
}


export default Svg
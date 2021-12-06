import React from "react";

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="160"
    height="35"
    viewBox="0 0 160 35"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.51.592c-.327.85-.491 1.825-.491 2.925 0 1.65.58 3.204 1.122 4.027.543.824 2.144 2.486 3.859 3.456 1.143.647 2.476 1.112 4 1.397v8.15l-2.474 1.624-1.736 1.13-2.154 1.392-1.901 1.352c-.206.165-.403.327-.594.486l-.547.463c-.262.226-.507.444-.734.653l-.432.407c-.477.461-.86.876-1.148 1.246-.783 1.002-1.242 2.66-1.379 4.973H17V29a27.5 27.5 0 0 1-2.623.138c-.793 0-1.586-.046-2.377-.138v5.273H7.948c-.127-1.878-.52-3.477-1.176-4.797-.634-1.273-1.477-2.622-2.53-4.045a13.563 13.563 0 0 1-3.42-9.029c0-2.43.635-4.712 1.75-6.687.941-1.253 1.15-1.827 1.86-2.555a13.504 13.504 0 0 1 9.945-4.355c2.258 0 4.387.554 6.26 1.534A4.988 4.988 0 0 1 21.6 1.74C22.455.564 23.614.416 25.51.59Zm130.148 3.825V26.32h3.451V31h-8.712v-.683c-.615.319-1.245.57-1.888.751a7.146 7.146 0 0 1-1.956.274c-1.356 0-2.6-.242-3.733-.726a8.837 8.837 0 0 1-2.922-1.99 9.104 9.104 0 0 1-1.904-2.965 9.686 9.686 0 0 1-.684-3.647c0-1.299.225-2.509.675-3.63a8.98 8.98 0 0 1 1.88-2.93 8.712 8.712 0 0 1 2.886-1.965c1.122-.478 2.355-.718 3.7-.718.74 0 1.434.072 2.083.214.65.142 1.27.344 1.863.606V9.098h-2.478v-4.68h7.74Zm-59.76 8.884v10.421c0 1.185.303 2.07.906 2.657.604.586 1.39.88 2.358.88.683 0 1.304-.211 1.862-.632.558-.422.962-.991 1.213-1.709v-6.936H99.4v-4.681h8.371v13.018h2.136V31h-7.5v-1.503a6.394 6.394 0 0 1-2.119 1.264c-.808.296-1.742.444-2.801.444-.98 0-1.902-.154-2.768-.461a6.216 6.216 0 0 1-2.264-1.393c-.643-.62-1.15-1.398-1.52-2.332-.37-.933-.555-2.033-.555-3.297v-5.74h-2.307v-4.681H95.9Zm-44.554-8.2c1.184 0 2.32.153 3.408.461 1.088.307 2.101.74 3.041 1.298a12.66 12.66 0 0 1 4.536 4.613c.546.957.968 1.987 1.264 3.092.296 1.105.444 2.255.444 3.451 0 1.196-.148 2.346-.444 3.451a13.132 13.132 0 0 1-1.264 3.1 12.92 12.92 0 0 1-1.973 2.632A12.48 12.48 0 0 1 51.344 31H41.4v-4.681h2.067V9.799h-2.067V5.1h9.943Zm35.705 0v8.832h-5.552v-3.639h-6.133v5.45h5.313v4.971h-5.313v5.604h2.733V31H67.01v-4.681h2.682V10.294H67.01V5.101h20.04Zm38.935 7.875c2.13 0 3.77.596 4.92 1.786s1.725 2.93 1.725 5.219v6.338h2.512V31h-8.081V20.818c0-.99-.262-1.768-.786-2.332-.524-.564-1.219-.846-2.084-.846a4.48 4.48 0 0 0-1.794.393c-.604.262-1.19.752-1.76 1.47v6.816h2.87V31h-11.002v-4.681h2.597v-8.337h-2.562v-4.681h8.063v1.555a9.03 9.03 0 0 1 2.486-1.376 8.349 8.349 0 0 1 2.896-.504Zm20.86 4.528a4.072 4.072 0 0 0-1.667.307 4.14 4.14 0 0 0-1.366.923 4.37 4.37 0 0 0-.931 1.435c-.228.558-.342 1.19-.342 1.896 0 .695.114 1.324.342 1.888.227.564.538 1.042.93 1.435.394.393.85.692 1.367.897a5.019 5.019 0 0 0 1.666.342 4.153 4.153 0 0 0 2.042-.581 4.726 4.726 0 0 0 1.512-1.435V19.4a4.175 4.175 0 0 0-1.547-1.41 4.072 4.072 0 0 0-2.007-.486ZM51.31 9.799h-2.17v16.52h2.17a5.52 5.52 0 0 0 2.613-.65 6.827 6.827 0 0 0 2.136-1.767c.604-.746 1.082-1.623 1.435-2.631a9.777 9.777 0 0 0 .53-3.255 9.65 9.65 0 0 0-.53-3.229c-.353-1.002-.831-1.873-1.435-2.614a6.668 6.668 0 0 0-2.136-1.742 5.64 5.64 0 0 0-2.613-.632Zm-26.933.603a1.997 1.997 0 0 0-1.994 2c0 1.105.893 2 1.994 2a1.997 1.997 0 0 0 1.994-2c0-1.104-.893-2-1.994-2ZM11.87 5.852C9.676 6.44 7.75 7.86 6.1 10.054l-.235.318 2.44 1.747.22-.3c1.262-1.665 2.633-2.67 4.122-3.069 1.489-.399 3.366-.157 5.31.66l.345.151 1.507-2.462c-.103-.088-.383-.253-.84-.494-2.526-1.075-4.904-1.34-7.099-.753Z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

export default Logo;

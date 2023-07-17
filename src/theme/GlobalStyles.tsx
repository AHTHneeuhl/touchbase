import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: "Roboto, sans-serif";
        scrollbar-width: thin;
        scrollbar-color: darkgrey slategrey;
      }

      body::-webkit-scrollbar {
        width: 4px;
      }

      body::-webkit-scrollbar-track {
        background-color: slategrey;
      }

      body::-webkit-scrollbar-thumb {
        background-color: darkgrey;
      }
    `}
  />
);

export default GlobalStyles;

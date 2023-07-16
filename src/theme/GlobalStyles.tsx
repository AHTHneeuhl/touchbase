import styled from "@emotion/styled";

const GlobalStyles = styled("div")({
  body: {
    margin: 0,
    fontFamily: "Roboto, sans-serif",
    scrollbarWidth: "thin",
    scrollbarColor: "darkgrey slategrey",
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "slategrey",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
    },
  },
});

export default GlobalStyles;

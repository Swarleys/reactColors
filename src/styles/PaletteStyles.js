export default {
  Palette: {
    height: "98.5vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5.5px",
    opacity: 1,
    backgroundColor: "#000",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255,255,255, .3)",
      fontSize: "1rem",
      textTransform: "uppercase",
      lineHeight: "30px",
      border: "none",
      textDecoration: "none"
    }
  }
};

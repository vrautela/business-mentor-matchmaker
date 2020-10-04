const homepageStyleSheet = {
  page: {
    justifyContent: "center",
    fontFamily: "Nunito",
  },
  description: {
    height: "200px",
    padding: "10px 80px",
  },
  info: {
    textAlign: "center",
    "& h2": {
      color: "black",
    },
  },
  business: {
    backgroundColor: "#3E978B",
    padding: "10px 0 60px 0",
  },
  mentor: {
    backgroundColor: "#57D0C0",
    padding: "10px 0 60px 0",
  },
  instructions: {
    display: "flex",
    "& div": {
      flex: 1,
    },
  },
};

export default homepageStyleSheet;

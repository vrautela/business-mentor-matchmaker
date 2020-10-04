const homepageStyleSheet = {
  page: {
    justifyContent: "center",
    fontFamily: "Sans-Serif",
  },
  description: {
    height: "200px",
    padding: "10px 80px",
    display: "flex",

    "& p": {
      fontSize: "20px",
      width: "500px",
    },
    "& img": {
      width: "300px",
      height: "300px",
      marginLeft: "300px",
    },
  },
  info: {
    textAlign: "center",
    "& h1": {
      color: "black",
      fontSize: "40px",
    },
    "& p": {
      fontSize: "20px",
    },
    "& img": {
      width: "100px",
    },
  },
  business: {
    backgroundColor: "#3E978B",
    padding: "10px 0 60px 0",
    marginBottom: "5px",
    height: "120px",
    "& p": {
      fontSize: "20px",
    },
  },
  mentor: {
    backgroundColor: "#57D0C0",
    padding: "10px 0 60px 0",
    height: "120px",
    "& p": {
      fontSize: "20px",
    },
  },
  instructions: {
    display: "flex",
    "& div": {
      flex: 1,
    },
  },
};

export default homepageStyleSheet;

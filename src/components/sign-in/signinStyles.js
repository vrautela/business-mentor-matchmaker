const signinStyleSheet = {
  page: {
    display: "flex",
    height: "600px",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    fontFamily: "Nunito",
  },
  box: {
    backgroundColor: "#F0F0F0",
    borderRadius: "25px",
    width: "300px",
    height: "400px",
  },
  title: {
    backgroundColor: "white",
    color: "#888888",
    fontSize: "26px",
    borderRadius: "25px 25px 0px 0px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    backgroundColor: "#F0F0F0",
    height: "220px",
    borderRadius: "0px 0px 25px 25px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& input": {
      marginTop: "30px",
      border: "none",
      borderRadius: "50px",
      outline: "none",
      height: "40px",
      width: "230px",
      paddingLeft: "5px",
      "&::placeholder": {
        color: "#E1E1E1",
        fontFamily: "Roboto",
        fontSize: "15px",
      },
    },
  },
  register: {
    "& button": {
      marginLeft: "80px",
      backgroundColor: "#57D0C0",
      border: "none",
      borderRadius: "50px",
      outline: "none",
      height: "50px",
      width: "140px",
      fontSize: "20px",
      fontWeight: "600",
    },
  },
};

export default signinStyleSheet;

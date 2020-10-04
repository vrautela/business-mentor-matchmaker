const NavbarStyleSheet = {
  nav: {
    fontFamily: "Nunito",
    width: "100%",
    float: "left",
    margin: "0 0 3em 0",
    padding: "0",
    listStyle: "none",
    backgroundColor: "#57D0C0",
  },
  pageLinks: {
    float: "right",
    "& a": {
      display: "block",
      padding: "8px 15px",
      textDecoration: "none",
      fontWeight: "bold",
    },
  },
  companyName: {
    float: "left",
    padding: "8px 15px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "white",
  },
};

export default NavbarStyleSheet;

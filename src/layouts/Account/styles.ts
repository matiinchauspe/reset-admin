import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {},
  header: {
    height: 60,
    padding: "5px 10px",
    borderBottom: "1px solid #e0e0e0",
  },
  bodyContainer: {
    height: "calc(100vh - 60px);",
  },
  bodyContent: {
    height: "100%",
    marginTop: -10,
  },
  formContainer: {
    padding: "50px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

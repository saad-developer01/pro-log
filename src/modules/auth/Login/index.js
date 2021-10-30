import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Login from "./Login";
import { fakeLogin } from "./../store/auth.actions";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fakeLogin,
    },
    dispatch
  );

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

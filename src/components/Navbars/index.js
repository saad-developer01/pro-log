import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AdminNavbarLinks from "./AdminNavbarLinks";
import { fakeLogin } from "./../../modules/auth/store/auth.actions";

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

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbarLinks);

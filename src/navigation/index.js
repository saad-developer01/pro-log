import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import { appInitialized } from "./../store/core/core.actions";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      appInitialized,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  const { core, auth } = state;
  return {
    initialLoading: core.initialLoading,
    isLoggedIn: auth.isLoggedIn,
    callInProcess: core.callInProcess,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Settings from "./Settings";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Signup from "./Signup";

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

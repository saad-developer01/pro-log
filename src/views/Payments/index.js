import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Payments from "./Payments";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Payments);

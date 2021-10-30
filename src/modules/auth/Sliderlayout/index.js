import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Sliderlayout from "./Sliderlayout";

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sliderlayout);

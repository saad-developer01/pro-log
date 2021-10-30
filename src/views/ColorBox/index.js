import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ColorBox from "./ColorBox";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ColorBox);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomButton from "./CustomButton";

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);

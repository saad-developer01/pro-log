import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RegistrationSteps from "./RegistrationSteps";

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationSteps);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tables from "./Tables";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tables);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

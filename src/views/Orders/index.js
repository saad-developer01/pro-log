import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Orders from "./Orders";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

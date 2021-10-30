import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "./Menu";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

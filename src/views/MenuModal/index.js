import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MenuModal from "./MenuModal";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);

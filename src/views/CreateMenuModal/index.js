import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CreateMenuModal from "./CreateMenuModal";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateMenuModal);

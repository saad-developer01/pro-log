import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CreateTableModal from "./CreateTableModal";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateTableModal);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ItemDetailsModal from "./ItemDetailsModal";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsModal);

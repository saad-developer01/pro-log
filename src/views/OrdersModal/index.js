import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import OrdersModal from "./OrdersModal";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersModal);

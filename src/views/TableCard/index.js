import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TableCard from "./TableCard";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableCard);

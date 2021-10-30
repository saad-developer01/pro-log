import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MenuCard from "./MenuCard";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuCard);

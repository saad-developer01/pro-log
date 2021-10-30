import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SelectBox from "./SelectBox";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectBox);

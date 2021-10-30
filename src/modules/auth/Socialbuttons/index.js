import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Socialbuttons from "./Socialbuttons";

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Socialbuttons);

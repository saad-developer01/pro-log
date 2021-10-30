import { combineEpics, select } from "redux-most";
import { empty } from "most";
import { SHOW_TOAST } from "./toast.actions";

const toastEpic = ($actions) =>
  $actions.thru(select(SHOW_TOAST)).flatMap((action) => {
    const { message } = action.payload;
    if (message) {
      alert(message);
    }
    return empty();
  });

export default combineEpics([toastEpic]);

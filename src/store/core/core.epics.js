import { combineEpics, select } from "redux-most";
import * as most from "most";
import { GET_LANGUAGE, languageSuccess, callInProcess1 } from "./core.actions";
import { getLanguagesService } from "../../core/services/core/core.service";

const getLanguagesEpic = ($actions) =>
  $actions.thru(select(GET_LANGUAGE)).flatMap(() => {
    return most
      .fromPromise(getLanguagesService())
      .flatMap((response) => {
        return most.from([
          callInProcess1(false),
          languageSuccess(response.items || []),
        ]);
      })
      .recoverWith(() => {
        return most.of(callInProcess1(false));
      });
  });

export default combineEpics([getLanguagesEpic]);

import { IReduxPageStoreState } from "../pages/Redux/types";

export interface IAction {
  type: string;
  payload: any;
}

export interface IGlobalStoreState {
  globalSyncId: string;
  globalAsyncId: string;
}

export interface IStoreState {
  reduxPage: IReduxPageStoreState;
  global: IGlobalStoreState;
}

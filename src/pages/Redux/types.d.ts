import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { IGlobalStoreState } from "@/global/types";

export interface IReduxPageStoreState {
  syncId: string;
  asyncId: string;
}

export interface IReduxPageActionsProps {
  dataSync: () => void;
  dataAsync: (parameter: string) => (dispatch: Dispatch) => void;
}

export interface IReduxPageState {
  value: number;
}

export interface IReduxPageProps extends RouteComponentProps<any>, IReduxPageActionsProps {
  reduxPage: IReduxPageStoreState;
  global: IGlobalStoreState;
}

declare module "redux-persist/lib/persistReducer" {
  import { Reducer } from "redux";
  import { PersistConfig } from "redux-persist";

  export default function persistReducer<S, A extends { type: any }>(
    config: PersistConfig<S>,
    baseReducer: Reducer<S, A>
  ): Reducer<S, A>;
}

import { BEAR_TYPE } from './../constants';
import { isEqual } from '../helpers/comparison';
import APIBears from '../services/bears';
import { ModelBear } from '../types/bears';
import { Action } from '../types/reucer';
import { APIBearsCtx } from '../types/services.bears';

export const initialState = {
  data: [] as ModelBear[],
  loading: true,
  filterValues: [0, 5, 9, 15, 50],
  value:
    (window.localStorage.getItem('params') &&
      // @ts-ignore
      JSON.parse(window.localStorage.getItem('params')).beer_name) ||
    '',
  params:
    // @ts-ignore
    (window.localStorage.getItem('params') && JSON.parse(window.localStorage.getItem('params'))) ||
    ({} as APIBearsCtx),
};

export function reducer(state: BeersState, action: Action<BEAR_TYPE>) {
  switch (action.type) {
    case BEAR_TYPE.SET_DATA: {
      if (isEqual(state.data, action.payload)) return state;
      window.localStorage.setItem('params', JSON.stringify(action.payload.params));
      return {
        ...state,
        data: action.payload.data,
        params: action.payload.params,
        loading: false,
      };
    }
    default:
      return state;
  }
}

export const fetchData = async ({ dispatch, params, concat }: IFetchData) => {
  try {
    const totalParams = concat ? { ...concat, ...params } : params;
    const data = await APIBears.fetchBeers(totalParams);
    dispatch({
      type: BEAR_TYPE.SET_DATA,
      payload: {
        data,
        params: totalParams,
      },
    });
  } catch (e) {
    console.error(e);
  }
};


// TYPES
export type BeersState = typeof initialState;
interface FetchDataPayload {
  data?: ModelBear[]
  params?: APIBearsCtx
}
interface IFetchData {
  params: APIBearsCtx;
  concat?: BeersState['params'];
  dispatch: (action: Action<BEAR_TYPE, FetchDataPayload>) => void;
}

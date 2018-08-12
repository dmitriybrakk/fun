import { APP_LOADED } from '../constants/action-types/app';

export function appLoaded(params) {
  return {
    type: APP_LOADED,
    params,
  };
}

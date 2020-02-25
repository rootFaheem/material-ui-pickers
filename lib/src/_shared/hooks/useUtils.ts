import { useContext, useRef } from 'react';
import { IUtils } from '@date-io/core/IUtils';
import { MaterialUiPickersDate } from '../../typings/date';
import { MuiPickersAdapterContext } from '../../LocalizationProvider';

export const checkUtils = (utils: IUtils<MaterialUiPickersDate> | null | undefined) => {
  if (!utils) {
    // tslint:disable-next-line
    throw new Error(
      'Can not find utils in context. You either a) forgot to wrap your component tree in LocalizationProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.'
    );
  }
};

export function useUtils() {
  const utils = useContext(MuiPickersAdapterContext);
  checkUtils(utils);

  return utils!;
}

export function useNow() {
  const utils = useUtils();
  const now = useRef(utils.date());

  return now.current;
}

export type MuiPickersUtils = IUtils<MaterialUiPickersDate>;

import type { LcRuntimeContext } from '../types/runtime';

import { createContext, useContext } from 'react';

export const RuntimeContext = createContext<LcRuntimeContext>({
  $v: {},
});

export function useRuntimeContext() {
  return useContext(RuntimeContext);
}

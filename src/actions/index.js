export function createAction(constant, data) {
    return { type: constant, payload: data }
  }
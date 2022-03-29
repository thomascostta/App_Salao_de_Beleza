import types from "./types";

export function allServices(services) {
  return { type: types.ALL_SERVICES, services };
}

export function updateForm(payload) {
  return { type: types.UPDATE_FORM, payload };
}

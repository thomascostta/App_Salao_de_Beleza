import types from "./types";

export function allServices(services) {
  return { type: types.ALL_SERVICES, services };
}

export function updateForm(payload) {
  return { type: types.UPDATE_FORM, payload };
}

export function updateScheduling(payload) {
  return { type: types.UPDATE_SCHEDULING, payload };
}

export function updateSchedule(payload) {
  return { type: types.UPDATE_SCHEDULE, payload };
}

export function filterSchedule(payload) {
  return { type: types.FILTER_SCHEDULE, payload };
}

export function dateScheduling(date, timeOfDay) {
  return {
    type: types.DATA_SCHEDULING,
    payload: {
      date,
      timeOfDay,
    },
  };
}

export function updateCollaboratos(payload) {
  return { type: types.COLLABORATORS, payload };
}

import types from "./types";

export function allServices(services) {
  return { type: types.ALL_SERVICES, services };
}

export function updateForm(payload) {
  return { type: types.UPDATE_FORM, payload };
}

export function updateScheduling({ servicoId, modalAgendamento }) {
  return {
    type: types.UPDATE_SCHEDULING,
    payload: {
      modalAgendamento,
      servicoId,
    },
  };
}

export function updateSchedule(payload) {
  return { type: types.UPDATE_SCHEDULE, payload };
}

export function filterSchedule(payload) {
  return { type: types.FILTER_SCHEDULE, payload };
}

export function dateScheduling(date, timeOfDay, dayOfWeek) {
  return {
    type: types.DATA_SCHEDULING,
    payload: {
      date,
      timeOfDay,
      dayOfWeek,
    },
  };
}

export function updateCollaboratos(payload) {
  return { type: types.UPDATE_COLLABORATORS, payload };
}

export function updateModalSpecialist(payload) {
  return { type: types.MODAL_SPECIALIST, payload };
}

export function updatePaymentMethod(payload) {
  return { type: types.PAYMENT_METHOD, payload };
}

export function updateModalPaymentMethod(payload) {
  return { type: types.MODAL_PAYMENT_METHOD, payload };
}

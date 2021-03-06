import types from "./types";
import { dataHaircut } from "../../../data/dataHaircut";
import produce from "immer";
import consts from "../../../consts";

const INITIAL_STATE = {
  services: [...dataHaircut],
  agenda: [],
  colaboradores: [],
  payment: [],
  agendamento: {
    servicoId: null,
    colaboradorId: null,
    date: null,
    timeOfDay: null,
    confirmation: false,
  },
  form: {
    inputFiltro: "",
    inputFiltroFoco: false,
    modalEspecialista: false,
    modalAgendamento: false,
    modalPayment: false,
    agendamentoLoading: false,
  },
};

export default function salao(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ALL_SERVICES: {
      return { ...state.services, ...action.services };
    }
    // *** with the lib 'immer'
    // case types.ALL_SERVICES: {
    //   return produce(state, (draft) => {
    //     draft.salao = { ...draft.salao, ...action.salao };
    //   });
    // }

    case types.UPDATE_FORM: {
      return {
        ...state,
        form: { ...state.form, ...action.payload },
      };
    }

    // *** with the lib 'immer'
    // case types.UPDATE_FORM: {
    //   return produce(state, (draft) => {
    //     draft.form = { ...state.form, ...action.payload };
    //   });
    // }

    case types.UPDATE_SCHEDULING: {
      return {
        ...state,
        form: {
          ...state.form,
          modalAgendamento: action.payload.modalAgendamento,
        },
        agendamento: {
          ...state.agendamento,
          servicoId: action.payload.servicoId,
        },
      };
    }

    // *** with the lib 'immer'
    // case types.UPDATE_SCHEDULING: {
    //   return produce(state, (draft) => {
    //     draft.form.modalAgendamento = true;
    //     draft.agendamento = {
    //       ...state.agendamento,
    //       servicoId: action.payload.id,
    //     };
    //   });
    // }

    case types.DATA_SCHEDULING: {
      return {
        ...state,
        agendamento: {
          ...state.agendamento,
          ...action.payload.date,
          ...action.payload.timeOfDay,
          ...action.payload.dayOfWeek,
        },
      };
    }

    case types.UPDATE_COLLABORATORS: {
      return {
        ...state,
        colaboradores: { ...state.colaboradores, ...action.payload },
        agendamento: {
          ...state.agendamento,
          colaboradorId: action.payload.login.uuid,
        },
      };
    }

    case types.MODAL_SPECIALIST: {
      return {
        ...state,
        form: { ...state.form, modalEspecialista: action.payload },
      };
    }

    case types.PAYMENT_METHOD: {
      return {
        ...state,
        payment: { ...state.payment, ...action.payload },
      };
    }

    case types.MODAL_PAYMENT_METHOD: {
      return {
        ...state,
        form: { ...state.form, modalPayment: action.payload },
      };
    }

    case types.SAVE_SCHEDULING: {
      return {
        ...state,
        agendamento: { ...state.agendamento, confirmation: action.payload },
        form: {
          ...state.form,
          agendamentoLoading: action.payload,
          modalAgendamento: false,
        },
      };
    }

    default:
      return state;
  }
}

import types from "./types";
import produce from "immer";
import consts from "../../../consts";

const INITIAL_STATE = {
  services: [
      {
        id: "1",
        corte: "Bold undercut para cabelos lisos",
        valor: 35.0,
        time: 30,
        image:
          "https://salaovirtual.org/wp-content/uploads/2016/05/undercut-com-coque.jpg",
      },
      {
        id: "2",
        corte: "Undercut com fade e cabelo mais longo",
        valor: 30.0,
        time: 25,
        image:
          "https://salaovirtual.org/wp-content/uploads/2016/05/pomada-barba.jpg",
      },
      {
        id: "3",
        corte: "Black fade haircut",
        valor: 20.0,
        time: 30,
        image:
          "https://i.pinimg.com/564x/68/57/16/685716ef980cf439fac453064c57957f.jpg",
      },
      {
        id: "4",
        corte: "Barba degradê style",
        valor: 20.0,
        time: 30,
        image:
          "https://i.pinimg.com/564x/fd/b2/2c/fdb22cbb88361de6419482b5eab0fdc1.jpg",
      },
      {
        id: "5",
        corte: "Barba all top",
        valor: 20.0,
        time: 30,
        image:
          "https://i.pinimg.com/564x/87/49/6d/87496d9cf02ea48727f380830fb26793.jpg",
      },
      {
        id: "5",
        corte: "Barba boxed",
        valor: 20.0,
        time: 30,
        image:
          "https://i.pinimg.com/564x/67/ab/f8/67abf8f365da2ae75ca35c3586dfd736.jpg",
      },
  ],
  agenda: [],
  colaboradores: [],
  agendamento: {
    clienteId: consts.clienteId,
    salaoId: consts.salaoId,
    servicoId: null,
    colaboradorId: null,
    data: null,
  },
  form: {
    inputFiltro: "",
    inputFiltroFoco: false,
    modalEspecialista: false,
    modalAgendamento: 0,
    agendamentoLoading: false,
  },
};

export default function salao(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ALL_SERVICES: {
      return {...state.services, ...action.services }
    }


    // with the lib 'immer'
    // case types.ALL_SERVICES: {
    //   return produce(state, (draft) => {
    //     draft.salao = { ...draft.salao, ...action.salao };
    //   });
    // }

    default:
      return state;
  }
}

import { obtener } from "../actions/depositoAction";

const initialState = {
    saldo: [{
        mes: 'Enero',
        saldo: 10,
    }, {
        mes: 'Febrero',
        saldo: 20
    }, {
        mes: 'Marzo',
        saldo: 30
    }, {
        mes: 'Abril',
        saldo: 40
    }],
    rendimiento: 0
}

export default (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'OBTENER_SALDOS':
            return {...state};
        case 'CALCULAR_RENDIMIENTO':
            console.log(state);
            let sum = state.state.saldo.map(s => s.saldo).reduce((a, b) => a + b);
            state.state.rendimiento = sum;
            return {...state};
        default:
            return {state};
    }
}
// console.log(document.getElementById('inc'));

// ====== Definir Reducer e Estado Inicial ==========
const initialState = {
  count: 0,
  clickCount: 0,
  incrementValue: 0,
  decrementValue: 0,
  addedValues: [],
  clickCount: 0,
};

function changeState(state, action) {
    const valor = action.type === 'INCREMENT' ? state.incrementValue : state.decrementValue;

    return {
      ...state,
      count: state.count + valor,
      addedValues: [...state.addedValues, valor],
      clickCount: state.clickCount + 1,
    }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return changeState(state, action);
  }
  if (action.type === 'DECREMENT') {
    return changeState(state, action);
  }
  if (action.type === 'INCREMENT_VALUE') {
    return {
      ...state,
      incrementValue: action.value,
    };
  }
  if (action.type === 'DECREMENT_VALUE') {
    return {
      ...state,
      decrementValue: action.value,
    };
  }
  return state;
};

// ====== Criar a Store ==========
const store = Redux.createStore(reducer);

// ====== Lendo e reagindo a mudanças do Estado Global ==========
// Descomente abaixo:

store.subscribe(() => {
  // Leia a variável do estado global
  const { count, clickCount , addedValues } = store.getState();

  // atualizar
  const h1Element = document.getElementById('counter');
  h1Element.innerText = count;
  document.getElementById('counterClicks').innerHTML = clickCount;
  document.getElementById('addedValues').innerHTML = addedValues;
});

// ========== Disparar as Actions ==========
const incrementButton = document.getElementById('inc');
const decrementButton = document.getElementById('dec');
document.getElementById('incrementCounter').addEventListener('change', () => {
  const action = {
    type: 'INCREMENT_VALUE',
    value: parseInt(event.target.value),
  }
  store.dispatch(action);
});

document.getElementById('decrementCounter').addEventListener('change', () => {
  const action = {
    type: 'DECREMENT_VALUE',
    value: parseInt(`-${event.target.value}`),
  }
  store.dispatch(action);
});

incrementButton.addEventListener('click', () => {
  // dispare sua action aqui.
  store.dispatch({ type: 'INCREMENT' });
});
decrementButton.addEventListener('click', () => {
  // dispare sua action aqui.
  store.dispatch({ type: 'DECREMENT' });
});

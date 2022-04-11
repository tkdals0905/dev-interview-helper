import produce from 'immer';

const initialized = {
  mainCards: [],
  isLoadCards: false,
  isDetail: null,
};

export const card1 = {
  id: 1,
  userId: 1,
  username: 'sungmin',
  question: '호이스팅이란? (Hoisting)',
  answer:
    '호이스팅은 코드 실행 전에 변수 및 함수 선언을 해당 범위의 맨 위로 이동하는 자바스크립트 메커니즘이다',
  Likers: [1, 2, 3, 4],
  Shared: [1, 2, 3, 4],
};
export const card2 = {
  id: 2,
  userId: 2,
  username: 'zerocho',
  question: '비동기란?',
  answer: `비동기방식은 현재 작업의 요청과 해당작업의 응답이 동시에 진행되지 않아도 되는 것으로 응답에 관계없이 바로 다음 동작이 실행되는 것을 말한다`,
  Likers: [1, 2],
  Shared: [1, 3],
};
export const card3 = {
  id: 3,
  userId: 1,
  username: 'sungmin',
  question: 'Async, await 란?',
  answer: `Promise를 더욱 쉽게 사용할 수 있도록 ES2017(ES8) 문법이다.
  함수의 앞부분에 async 키워드를 추가하고, 함수 내부에서 Promise의 앞부분에 await 키워드를 사용한다.
  async, await를 사용할 경우 코드가 간결해지지만, 에러처리를 잡기 위해 try catch를 사용해야한다. 동기적인 코드흐름으로 개발이 가능하다.
  예외처리 까다로운점`,
  Likers: [],
  Shared: [1, 4, 5],
};
export const card4 = {
  id: 4,
  userId: 1,
  username: 'sungmin',
  question: '변수가 생성되는 단계',
  answer: `변수 생성하는데 총 3가지 단계를 걸친다.
  1. 선언단계: 변수를 변수객체에 등록하는 단계이다 . 해당 변수객체는 스코프 참조대상이된다.
  2. 초기화단계: 변수객체 에 있는 변수들 에게 메모리 공간을 확보해주는 단계. 각 변수들 에게 "undefined" 값을  할당하게 된다.
  3. 할당단계: 변수들 에게 새로운값을 할당해주는 단계. 
  - "var"는 선언과 초기화 가 한번에 이뤄져서 undefined 값을 초기화 하기 때문에. 변수 선언문 전에 접근해도 에러가 발생하지 않고 undefined 값이 출력이 된다.
  - "const" ,"let" 은 선언과 초기화 가 분리되어있기 때문에 변수 선언문 까지 도달해야 초기화 가 되기때문에 그전에 변수에 접근하면 참조에러가 뜬다.`,
  Likers: [5],
  Shared: [5],
};

export const card5 = {
  id: 5,
  userId: 2,
  username: 'zerocho',
  question: 'cors 란?',
  answer: `Cross-origin resource sharing(CORS)는 최초에 리소스를 제공한 출처(origin)와 다른 출처의 리소스를 요청하는 경우(cross-origin 요청),특정 HTTP header를 사용하여 웹 애플리케이션의 cross-origin 요청을 브라우저가 제한적으로 허용하는 정책입니다.`,
  Likers: [2, 3, 4, 5, 6],
  Shared: [1, 4, 5],
};

export const LOAD_CARDS_SUCCESS = 'LOAD_CARDS_SUCCESS';

export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';

export const SHARE_CARD_SUCCESS = 'SHARE_CARD_SUCCESS';

export const OPEN_CARD_DETAIL = 'OPEN_CARD_DETAIL';

export const CLOSE_CARD_DETAIL = 'CLOSE_CARD_DETAIL';

const reducer = (state = initialized, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_CARDS_SUCCESS:
        draft.mainCards = draft.mainCards.concat(
          card1,
          card2,
          card3,
          card4,
          card5,
        );
        draft.isLoadCards = true;
        break;
      case ADD_CARD_SUCCESS:
        draft.mainCards = [action.data, ...draft.mainCards];
        break;
      case OPEN_CARD_DETAIL:
        draft.isDetail = action.data;
        break;
      case CLOSE_CARD_DETAIL:
        draft.isDetail = null;
        break;
      default:
        break;
    }
  });

export default reducer;

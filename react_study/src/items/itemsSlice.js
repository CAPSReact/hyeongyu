import { createSlice } from '@reduxjs/toolkit';

// createSlice를 통해 액션 생성자와 액션 타입, 리듀서를 한 곳에서 생성할 수 있게 해준다.
export const breadSlice = createSlice({
  name: 'bread',
  // 초기 state 설정
  initialState: {
    value: false,
  },
  // 리듀서로, toggle 시 state를 변경한다.
  reducers: {
    toggle: state => {
      state.value = !state.value;
    },
  },
});

// toggle은 해당 data의 actions이다.
export const { toggle } = breadSlice.actions;

// breadData의 reducer를 export
export default breadSlice.reducer;
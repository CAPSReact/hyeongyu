import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // 아이템 배열
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state) => {
      // 클릭 날짜
      const now = new Date().toLocaleString();
      // 클릭 개수와 생성 날짜 배열에 추가
      state.value.push({ id: state.value.length + 1, date: now });
    },
  },
});

export const { addItem } = listSlice.actions;

export default listSlice.reducer;
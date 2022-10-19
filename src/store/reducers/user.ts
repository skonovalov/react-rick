import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  lastname: string;
}

const initialState: User = {
  name: '',
  lastname: ''
};

export const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state = action.payload;
    }
  },
});

export const { setUser } = userSlice.actions
export default userSlice.reducer
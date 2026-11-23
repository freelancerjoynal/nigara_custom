import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type InquiryFields = {
  name: string;
  business: string;
  email: string;
  phone: string;
  message: string;
};

type InquiryState = {
  fields: InquiryFields;
  prepared: boolean;
};

const emptyFields: InquiryFields = {
  name: "",
  business: "",
  email: "",
  phone: "",
  message: "",
};

const initialState: InquiryState = {
  fields: { ...emptyFields },
  prepared: false,
};

const inquirySlice = createSlice({
  name: "inquiry",
  initialState,
  reducers: {
    setField(
      state,
      action: PayloadAction<{ field: keyof InquiryFields; value: string }>,
    ) {
      state.fields[action.payload.field] = action.payload.value;
      state.prepared = false;
    },
    prepareInquiry(state) {
      state.prepared = true;
    },
    resetInquiry(state) {
      state.fields = { ...emptyFields };
      state.prepared = false;
    },
  },
});

export const { setField, prepareInquiry, resetInquiry } = inquirySlice.actions;
export default inquirySlice.reducer;

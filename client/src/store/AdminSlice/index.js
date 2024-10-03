// src/redux/notificationSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5500/notifications'; // Adjust based on your API

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// Add Notification
export const addNotification = createAsyncThunk(
  'notifications/addNotification',
  async (notification) => {
    const response = await axios.post(API_URL, notification); // Assuming your API supports POST for adding notifications
    return response.data;
  }
);

// Delete Notification
export const deleteNotification = createAsyncThunk(
  'notifications/deleteNotification',
  async (id) => {
    await axios.delete(`${API_URL}/${id}`); // Assuming your API supports DELETE for notifications
    return id; // Return the ID to remove it from the state
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNotification.fulfilled, (state, action) => {
        state.notifications.push(action.payload); // Add the new notification to the list
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
      });
  },
});

export const selectNotifications = (state) => state.notifications.notifications;
export const selectLoading = (state) => state.notifications.loading;
export const selectError = (state) => state.notifications.error;

export default notificationSlice.reducer;

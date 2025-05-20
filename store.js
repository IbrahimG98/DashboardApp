import { configureStore } from '@reduxjs/toolkit'

import dashboardSlice from './features/dashboardSlice';

export default configureStore({
    reducer: {
        dashboard: dashboardSlice,
    },
    devTools: process.env.REACT_APP_DEVTOOLS ?? false
});

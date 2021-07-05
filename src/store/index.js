import { createStore } from 'vuex';

import tutorsModule from './modules/tutors/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    tutors: tutorsModule,
    requests: requestsModule,
    auth: authModule
  }
});

export default store;

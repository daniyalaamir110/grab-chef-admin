export const ENDPOINTS = {
  AUTH: {
    SIGN_UP: {
      URL: `/auth/sign-up`,
      METHOD: 'POST',
    },
    LOGIN: {
      URL: `/auth/login`,
      METHOD: 'POST',
    },
    SEND_OTP: {
      URL: `/auth/send-otp`,
      METHOD: 'POST',
    },
    VERIFY_OTP: {
      URL: `/auth/verify-otp`,
      METHOD: 'POST',
    },
    RESET_PASSWORD: {
      URL: `/auth/reset-password`,
      METHOD: 'POST',
    },
  },
  USER: {
    ME: {
      URL: `/users/me`,
      METHOD: 'GET',
    },
  },
  CHAT: {
    GUEST: {
      URL: `/chat`,
      METHOD: 'POST',
    }, // free for everyone
    RETRIEVE_CHATS: {
      URL: (page: number, limit: number) => `/chat?page=${page}&limit=${limit}`,
      METHOD: 'GET',
    }, // get previous chats
    INITIATE: {
      URL: `/chat/initiate`,
      METHOD: 'POST',
    }, // for logged in user
    RETRIEVE_MESSAGES: {
      URL: (id: string, page: number, limit: number) =>
        `/chat/${id}?page=${page}&limit=${limit}`,
      METHOD: 'GET',
    }, // get chat messages
    CHAT_BY_ID: {
      URL: (id: string) => `/chat/${id}`,
      METHOD: 'PUT',
    }, // for previous chat
  },
};

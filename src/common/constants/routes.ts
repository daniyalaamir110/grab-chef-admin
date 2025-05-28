export const ROUTES = {
  HOME: `/`,
  AUTH: {
    LOGIN: `/login`,
    OTP_VERIFICATION: `/otp-verification`,
    FORGOT_PASSWORD: `/forgot-password`,
    CREATE_PASSWORD: `/create-password`,
  },
  PROJECT: {
    CREATE_PROJECT: {
      HOME: '/create-project',
      BASIC_INFO: '/basic-info',
      SETTINGS: '/project-settings',
      PROJECT_PROPERTY: '/project-property',
    },
  },
  CHAT: {
    CHAT_BY_ID: (id: string) => `/chat/${id}`,
  },
};

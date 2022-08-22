const config = {
  SENTRY_DSN: "https://68734ba84fd84f7c9fbdce0b77fadf0a@o1372052.ingest.sentry.io/6676810",
  STRIPE_KEY: "pk_test_51LYnPoJgZtZ1uHWrYqiNlb0osQBJKxBvE3jjX170zwQaYtbypQyh0iqFLplAS6G24XiuGnGT9c1MQ2VPT20CIu4Z00SE2s6Lv8",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
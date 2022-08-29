const config = {
  SENTRY_DSN:
    "https://10bb5057d1264ec89982336f0e7f2a60@o1381384.ingest.sentry.io/6695032",

  STRIPE_KEY:
    "pk_test_51LbLsREkN6tZ7bV4ICLA52URixMrbroYUSRiHxO3GzFj0XAH4cf66ZuaG5bVuCMKvSib8gcO6GYtmWNDcgiDR7Hl00g42hBG7k",

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

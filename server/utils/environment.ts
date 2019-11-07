export const IS_PROD = process.env.NODE_ENV === 'production';

export const IS_DEV = !IS_PROD;

export const PORT = process.env.PORT || 5000;

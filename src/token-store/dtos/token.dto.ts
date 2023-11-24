type Constants = {
  LOGIN_EXPERIMENTS: string;
  FACEBOOK_ANALYTICS_APPLICATION_ID: string;
  FACEBOOK_OTA_FIELDS: string;
  FACEBOOK_ORCA_APPLICATION_ID: string;
  BLOKS_VERSION_ID: string;
  HOSTNAME: string;
  WEB_HOSTNAME: string;
  HOST: string;
  WEBHOST: string;
};

// type Cookie = {
//   key: string;
//   value: string;
//   expires: string;
//   maxAge: number;
//   domain: string;
//   path: string;
//   secure: boolean;
//   hostOnly?: boolean;
//   creation: string;
//   lastAccessed: string;
//   httpOnly?: boolean;
//   extensions?: string[];
// };

// type Cookies = {
//   version: string;
//   storeType: string;
//   rejectPublicSuffixes: boolean;
//   cookies: Cookie[];
// };

type SupportedCapability = {
  name: string;
  value: string | number;
};

export type TokenData = {
  constants: Constants;
  cookies: string;
  supportedCapabilities: SupportedCapability[];
  language: string;
  timezoneOffset: string;
  radioType: string;
  capabilitiesHeader: string;
  connectionTypeHeader: string;
  isLayoutRTL: boolean;
  adsOptOut: boolean;
  thumbnailCacheBustingValue: number;
  clientSessionIdLifetime: number;
  pigeonSessionIdLifetime: number;
  deviceString: string;
  deviceId: string;
  uuid: string;
  phoneId: string;
  adid: string;
  build: string;
  igWWWClaim: string;
  passwordEncryptionKeyId: string;
  passwordEncryptionPubKey: string;
  authorization: string;
};

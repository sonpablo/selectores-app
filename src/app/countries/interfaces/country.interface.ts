export enum Region {
  Africa = 'africa',
  Americas = 'americas',
  Asia = 'asia',
  Europa = 'europe',
  Oceania = 'oceania',
}

export interface Country {
  name?: Name;
  cca3?: string;
  status?: Status;
  unMember?: boolean;
  currencies?: Currencies;
  idd?: Idd;
  capital?: string[];
  altSpellings?: string[];
  region?: string;
  subregion?: Subregion;
  languages?: Languages;
  translations?: { [key: string]: Translation };
  latlng?: number[];
  landlocked?: boolean;
  borders?: string[];
  area?: number;
  demonyms?: Demonyms;
  flag?: string;
  maps?: Maps;
  population?: number;
  car?: Car;
  timezones?: string[];
  continents?: string[];
  flags?: Flags;
  coatOfArms?: CoatOfArms;
  startOfWeek?: StartOfWeek;
  capitalInfo?: CapitalInfo;
  cioc?: string;
  gini?: { [key: string]: number };
  fifa?: string;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  EUR?: All;
  RSD?: All;
  DKK?: All;
  FOK?: All;
  ALL?: All;
  GBP?: All;
  GIP?: All;
  SEK?: All;
  ISK?: All;
  CHF?: All;
  PLN?: All;
  JEP?: All;
  RON?: All;
  NOK?: All;
  BYN?: All;
  GGP?: All;
  CZK?: All;
  BAM?: BAM;
  BGN?: All;
  MDL?: All;
  IMP?: All;
  HUF?: All;
  MKD?: All;
  UAH?: All;
  RUB?: All;
}

export interface All {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  ita?: string;
  lat?: string;
  srp?: string;
  dan?: string;
  fao?: string;
  sqi?: string;
  spa?: string;
  cat?: string;
  eus?: string;
  glc?: string;
  eng?: string;
  gle?: string;
  hrv?: string;
  est?: string;
  fin?: string;
  swe?: string;
  isl?: string;
  fra?: string;
  gsw?: string;
  roh?: string;
  lav?: string;
  pol?: string;
  lit?: string;
  nrf?: string;
  mlt?: string;
  deu?: string;
  ltz?: string;
  ron?: string;
  nor?: string;
  bel?: string;
  rus?: string;
  nfr?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  nld?: string;
  por?: string;
  ces?: string;
  slk?: string;
  ell?: string;
  de?: string;
  slv?: string;
  bos?: string;
  bul?: string;
  glv?: string;
  cnr?: string;
  hun?: string;
  mkd?: string;
  ukr?: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export enum StartOfWeek {
  Monday = 'monday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}

export enum Subregion {
  CentralEurope = 'Central Europe',
  EasternEurope = 'Eastern Europe',
  NorthernEurope = 'Northern Europe',
  SoutheastEurope = 'Southeast Europe',
  SouthernEurope = 'Southern Europe',
  WesternEurope = 'Western Europe',
}

import { IObjectTypesItem } from "../models/object-types/object-types.model";
import { IProject } from "../models/projects/project.model";

export const ALL_PROJECTS = [
  {
    name: 'Atlantis',
    value: 97,
  },
  {
    name: 'Зазеркалье',
    value: 107,
  }
] as IProject[];

export const TEST_DATA_TYPES = [
  {
    type: '1-ком',
    saled: '500',
    balance: '200',
    total: '150',
  },
  {
    type: '2-ком',
    saled: '500',
    balance: '200',
    total: '150',
  },
  {
    type: '3-ком',
    saled: '500',
    balance: '200',
    total: '150',
  },
  {
    type: 'Итого',
    saled: '500',
    balance: '200',
    total: '150',
  },
];

export const TEST_DATA_TYPES_STATUS = [
  {
    roomType: 1,
    list: [
      {
        status: 15,
        number: 10,
      },
      {
        status: 35,
        number: 15,
      },
      {
        status: 4,
        number: 23,
      }
    ],
  },
  {
    roomType: 2,
    list: [
      {
        status: 15,
        number: 320,
      },
      {
        status: 35,
        number: 325,
      },
      {
        status: 4,
        number: 333,
      }
    ],
  }
] as IObjectTypesItem[];

export const TEST_DATA_TYPES_STATUS_THREE = [
  {
    type: 3,
    status: 1,
    number: 30,
  },
];

export const TEST_DATA_TYPES_STATUS_TWO = [
  {
    type: 2,
    status: 1,
    number: 20,
  },
  {
    type: 2,
    status: 2,
    number: 80,
  },
];

export const TEST_DATA_TYPES_STATUS_ONE = [
  {
    type: 1,
    status: 1,
    number: 10,
  },
  {
    type: 1,
    status: 2,
    number: 50,
  },
  {
    type: 1,
    status: 3,
    number: 70,
  },
];
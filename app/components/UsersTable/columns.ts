import { topLevelProperties } from './constants';
import { caseInsensitiveFilter } from './helpers';

export const allColumns = [
  ...topLevelProperties.map((columnProperties) => ({
    ...columnProperties,
    filterMethod: caseInsensitiveFilter,
  })),
  {
    Header: 'adress',
    columns: [
      {
        Header: 'street',
        accessor: 'address.street',
        filterMethod: caseInsensitiveFilter,
      },
      {
        Header: 'suite',
        accessor: 'address.suite',
        filterMethod: caseInsensitiveFilter,
      },
      {
        Header: 'city',
        accessor: 'address.city',
        filterMethod: caseInsensitiveFilter,
      },
      { Header: 'zipcode', accessor: 'address.zipcode' },
      { Header: 'lat', accessor: 'address.geo.lat' },
      { Header: 'lgn', accessor: 'address.geo.lng' },
    ],
  },
];

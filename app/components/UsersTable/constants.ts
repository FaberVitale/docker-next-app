export const allTopLevelProperties: Readonly<
  (keyof UserData)[]
> = Object.freeze(['id', 'name', 'username', 'email', 'phone', 'website']);

export const allCompositePropertiesKeys: Readonly<
  (keyof UserData)[]
> = Object.freeze(['address', 'company']);

export const topLevelProperties = allTopLevelProperties.map((userProperty) => ({
  Header: userProperty,
  accessor: userProperty,
}));

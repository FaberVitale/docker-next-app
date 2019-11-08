export const caseInsensitiveFilter = (filter, row) => {
  const { value, id } = filter;

  return (row[id] + '').toUpperCase().startsWith(value.toUpperCase());
};

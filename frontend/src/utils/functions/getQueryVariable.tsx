export const LINKS_PER_PAGE = 3;

export const getQueryVariables = (page: number) => {
  const skip = page !== 1 ? (page - 1) * LINKS_PER_PAGE : 0;
  const take = LINKS_PER_PAGE;
  const orderBy = { createdAt: 'desc' };
  return { take, skip, orderBy };
};
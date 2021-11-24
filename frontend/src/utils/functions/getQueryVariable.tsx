export const JOBS_PER_PAGE = 3;

export const getQueryVariables = (page: number) => {
  const skip = page !== 1 ? (page - 1) * JOBS_PER_PAGE : 0;
  const take = JOBS_PER_PAGE;
  const orderBy = { createdAt: 'desc' };
  return { take, skip, orderBy };
};
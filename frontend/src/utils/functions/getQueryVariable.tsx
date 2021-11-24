export const getQueryVariables = (page: number, jobsPerPage: number) => {
  const skip = page !== 1 ? (page - 1) * jobsPerPage : 0;
  const take = jobsPerPage;
  const orderBy = { createdAt: 'desc' };
  return { take, skip, orderBy };
};
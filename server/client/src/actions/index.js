// Bundle all exports
export {
  getAllCompanies,
  createCompany,
  getCompanyById,
  deleteCompanyById,
  sortCompanies
} from './companiesActions';

export {
  getAllDeals,
  getDealById,
  createDeal,
  deleteDealById,
  getDealPosition,
  setDealPosition
} from './dealsActions';

export {
  getSuccessRate,
  getDealsInProgress,
  getAveragePerDeal,
  getTotalRevenueToDate,
  getAverageTimeToClose,
  getTopThreeClients
} from './dashboardActions.js'
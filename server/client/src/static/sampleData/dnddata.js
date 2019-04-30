const dnddata = {
  deals: {
    'deal-1': {
      id: 'deal-1',
      dealName: 'State Farm Insurance',
      stage: 'Initiated',
      stageId: 'stage-1',
      amount: 100000,
      createdDate: 1524432669,
      closeDate: 1532298909,
      companyId: 10
    },
    'deal-2': {
      id: 'deal-2',
      dealName: 'Home Depot POS Machine Sales',
      stage: 'Contract Sent',
      stageId: 'stage-3',
      amount: 500000,
      createdDate: 1540503069,
      closeDate: 1544744109,
      companyId: 9
    },
    'deal-3': {
      id: 'deal-3',
      dealName: 'Boeing PC Sales',
      stage: 'Closed Lost',
      stageId: 'stage-5',
      amount: 780650,
      createdDate: 1532295069,
      closeDate: 1552570269,
      companyId: 8
    },
    'deal-4': {
      id: 'deal-4',
      dealName: 'Lowes POS Machine Sales',
      stage: 'Qualified',
      stageId: 'stage-2',
      amount: 1200450,
      createdDate: 1541698269,
      closeDate: 1548016269,
      companyId: 7
    },
    'deal-5': {
      id: 'deal-5',
      dealName: 'Exxon Mobil Automated Gas Pump Sales',
      stage: 'Closed Won',
      stageId: 'stage-4',
      amount: 34789000,
      createdDate: 1520984109,
      closeDate: 1542929709,
      companyId: 6
    }
  },

  stages: {
    'stage-1': {
      id: 'stage-1',
      title: 'Initiated',
      dealIds: ['deal-1', 'deal-2', 'deal-3']
    },
    'stage-2': {
      id: 'stage-2',
      title: 'Qualified',
      dealIds: []
    },
    'stage-3': {
      id: 'stage-3',
      title: 'Contract Sent',
      dealIds: []
    },
    'stage-4': {
      id: 'stage-4',
      title: 'Closed Won',
      dealIds: []
    },
    'stage-5': {
      id: 'stage-5',
      title: 'Closed Lost',
      dealIds: ['deal-4', 'deal-5']
    }
  },
  //faciitiate reodering of the stages
  stageOrder: ['stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5']
}

export default dnddata

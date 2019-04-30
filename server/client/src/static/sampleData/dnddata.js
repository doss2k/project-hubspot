const dnddata = {
  deals: {
    1: {
      dealId: 1,
      dealName: 'State Farm Insurance',
      stage: 'Initiated',
      stageId: 1,
      amount: 100000,
      createdDate: 1524432669,
      closeDate: 1532298909,
      companyId: 10
    },
    2: {
      dealId: 2,
      dealName: 'Home Depot POS Machine Sales',
      stage: 'Contract Sent',
      stageId: 3,
      amount: 500000,
      createdDate: 1540503069,
      closeDate: 1544744109,
      companyId: 9
    },
    3: {
      dealId: 3,
      dealName: 'Boeing PC Sales',
      stage: 'Closed Lost',
      stageId: 5,
      amount: 780650,
      createdDate: 1532295069,
      closeDate: 1552570269,
      companyId: 8
    },
    4: {
      dealId: 4,
      dealName: 'Lowes POS Machine Sales',
      stage: 'Qualified',
      stageId: 2,
      amount: 1200450,
      createdDate: 1541698269,
      closeDate: 1548016269,
      companyId: 7
    },
    5: {
      dealId: 5,
      dealName: 'Exxon Mobil Automated Gas Pump Sales',
      stage: 'Closed Won',
      stageId: 4,
      amount: 34789000,
      createdDate: 1520984109,
      closeDate: 1542929709,
      companyId: 6
    }
  },

  stages: {
    1: {
      stageId: 1,
      title: 'Initiated',
      dealIds: [1, 2, 3, 4, 5]
    },
    2: {
      stageId: 2,
      title: 'Qualified',
      dealIds: []
    },
    3: {
      stageId: 3,
      title: 'Contract Sent',
      dealIds: []
    },
    4: {
      stageId: 4,
      title: 'Closed Won',
      dealIds: []
    },
    5: {
      id: 5,
      title: 'Closed Lost',
      dealIds: []
    }
  },
  //faciitiate reodering of the stages
  stageOrder: [1, 2, 3, 4, 5]
}

export default dnddata

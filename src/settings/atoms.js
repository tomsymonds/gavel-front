import { atom } from 'recoil'

export const errorState = atom({
  key: 'error',
  default: {
    fetch: false,
    view: null
  }
})

export const alertState = atom({
  key: 'alert',
  default: {
    active: false,
    title: null,
    description: null,
    type: null
  }
})

export const viewHistory = atom({
  key: 'viewHistory',
  default: {
    currentIndex: 0,
    history: [{
      name: "cases",
      modelType: null,
      id: null,
      itemTitle: "Cases",
      scroll: 0
    }]
  }
})

export const apiToken = atom({
  key: 'apiToken',
  default: null    
})

export const globalHttpClient = atom({
  key: 'globalHttpClient',
  default: {
    client: null,
    hasToken: false
  }
})

export const status = atom({
  key: 'status',
  default: null
})

export const casesListState = atom({
  key: 'listState',
  default: {
    filter: {},
    sort: {},
    group: {}
  }
})

export const appStatus = atom({
  key: 'appStatus',
  default: {
    cases: {
      isFetching: false,
      isSuccess: false
    },
    system: {
      test: null,
      network: null
    }
  }
})
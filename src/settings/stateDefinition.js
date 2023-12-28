// import { atom, atomFamily, noWait } from 'recoil'

/**
 * Defines elements of data.
 * Required params:
 * 'type' is a reserved key which cannot be used in the state.default field. 
 */

const models = {
    type: 'cases',
    parentType: null, 
    requests: {
        all: {
            query: () => ['cases'],
            route: () => "/cases",
            method: 'get'
        }, 
        byID: {
            query: (params) => ['cases', {id: params.id}],
            route: (params) => `/cases/${params.id}`,
            method: 'get',
            idRequired: true
        }
    }
}

export default models
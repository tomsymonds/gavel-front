// import { atom, atomFamily, noWait } from 'recoil'

/**
 * Defines elements of data.
 * Required params:
 * 'type' is a reserved key which cannot be used in the state.default field. 
 */

const models = {
    cases: {
        type: 'cases',
        parentType: null, 
        requests: {
            all: {
                queryProvider: () => ['cases'],
                routeProvider: () => "/cases",
                method: 'get'
            }, 
            byID: {
                queryProvider: (params) => ['cases', {id: params.id}],
                routeProvider: (params) => `/cases/${params.id}`,
                method: 'get',
                idRequired: true
            }
        }
    }   
}

export default models
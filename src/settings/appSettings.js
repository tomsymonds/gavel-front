export const appSettings = {
    api: {
        name: "Rails",
        domain: "https://gavel-ut62.onrender.com"
    },
    requests: {
        //Error codes which will not trigger a React Query request retry
        noRetryErrorCodes: [401],
        globalStaleTime: 30000
    },
    localStorage: {
        //Field name for the stored auth token
        tokenStoreName: 'authToken'
    }, 
    //Sections in Main
    panels: ['stories', 'outlets'],
    errors: {
        //Statuses which should not show in Error component
        noShowStatuses: [401],
        //Messages which should not show in Error component
        noShowMessages: [],
        //Statuses which should have a remapped message instead of the default message from the API
        remapMessages: {
            500: "Sorry there's a problem. We're looking into it."
        }
    },
    logging: {
        on: false,
        isDevelopment: true, //process.env.NODE_ENV === 'development',
        renders: true
    },
    //Options for ordering to be included in OrderControl component
    listOrderOptions: {
        stories: {
            title: {
                displayName: "title",
                param: 'title'
            }, 
            updated: {
                displayName: "created",
                param: 'created_at'
            },
            hits: {
                displayName: "hits",
                param: 'hits_count'
            }
        },
        outlets: {
            name: {
                displayName: "name",
                param: 'name'
            }, 
            updated: {
                displayName: "created",
                param: 'created_at'
            }
        }
    },
    filter: {
        minCharacters: 3
    }
}
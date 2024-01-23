export const appSettings = {
    api: {
        name: "Rails",
        domain: "https://gavel-ut62.onrender.com/"
    },
    requests: {
        //Error codes which will not trigger a React Query request retry
        noRetryErrorCodes: [401],
        globalStaleTime: 30000
    },
   
}
import { atom } from 'recoil'
// import tokenController from '../helpers/tokenController'

//const token = tokenController()

// export const authAtom = atom({
//   key: 'auth',
//   default: {
//     loggedOut: null,
//     hasUser: false
//   }
// })

// export const panelAtom = atom({
//   key: 'panel',
//   default: 0
// })

// export const isLoggedInSelector = selector({
//   key: 'isLoggedIn',
//   get: ({get}) => {
//     const auth = get(authAtom)
//     const currentToken = token.get()
//     return (auth.hasUser || currentToken) && !auth.loggedOut
//   }
// });

// export const currentStoryIDsAtom = atom({
//   key: 'currentStoryIDs',
//   default: [],
// });

// export const currentHitIDsAtom = atom({
//   key: 'currentHitIDs',
//   default: [],
// });

// export const currentOutletIDsAtom = atom({
//   key: 'currentOutletIDs',
//   default: []
// })

// const filterAtoms = {
//   stories: atom({
//     key: 'storyFilterAtom',
//     default: {
//       terms: {},
//       isActive: false
//     }}),
//   outlets: atom({
//     key: 'outletFilterAtom',
//     default: {
//       terms: {},
//       isActive: false
//     }}),

// }

// const orderAtoms = {
//   stories: atom({
//     key: 'storyOrderAtom',
//     default: 'created_at_desc'
//   }),
//   outlets: atom({
//     key: 'outletOrderAtom',
//     default: 'created_at_desc'
//   })
// }


// export const getFilterAtom = (name) => {
//   return filterAtoms[name]
// }

// export const getOrderAtom = (name) => {
//   return orderAtoms[name]
// }

export const errorAtom = atom({
  key: 'error',
  default: null
})

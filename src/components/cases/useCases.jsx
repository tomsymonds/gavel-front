import { useGet } from '../../library/useController'
// import { useRecoilValue } from 'recoil'

const useCases = () => {
    
    const response = useGet({
        type: 'cases',
        requestType: 'all'
    })
    
    console.log(response)
    
}

export default useCases


// data eg `toDos` containing the current state of the data

// At its most basic, a controller must return an object containing

// newData eg `newToDo` containing an object representing an empty record

// For controllers requiring access to a list:

// `list` containing a list object see [useList](craftdocs://open?blockId=F6EAD4FC-3979-4695-BF66-08FF0A46A597&spaceId=c726fd25-e8ef-896e-0392-0e1c30afa30f)

// ### Imports


// Controllers need to import useGet and useUpdate from useController

// useList if a list is needed

// Recoil values

// ```other
// import { useGet, useUpdate } from './useController' 
// import useList from './useList'
// import { useRecoilValue } from 'recoil'
// ```


// Plus any atoms needed

// `import { currentStoryIDs } from '../config/atoms'`

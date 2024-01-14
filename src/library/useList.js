import { useRecoilState } from 'recoil'


//Controls the sorting, grouping, filtering and pagination of a list
//State for each list is stored in an atom passed to the hook.
//Generates params to be passed to controllers. 
const useList = (atom) => {

    const [listState, setListState] = useRecoilState(atom)

    //Set the current list state settings for the list. 
    //Pass a setting object and the name of the setting - eg 'filter' or 'sort'
    const set = (props) => {
        const { settingName, setting } = props
        const newSettings = {
            ...listState,
            [settingName]: setting
        }
        setListState(newSettings)
    }

    //Returns an object containing parameters to be passed to API which define 
    //filter, sort, order and page requests
    const params = () => {
        return {
            page: listState.page.current
        }
    }

    return {
        current: listState,
        page: {
            state: listState.page,
            set: (pageNumber) => {
                console.log('set page', pageNumber)
                set({
                    settingName: 'page', 
                    setting: {...listState.page, current: pageNumber}
                })
            }
        },
        set,
        params, 
    }
}

export default useList
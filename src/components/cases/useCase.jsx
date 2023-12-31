import { useGet } from '../../library/useController'
// import { useRecoilValue } from 'recoil'

const useCase = (id) => {
    
    const response = useGet({
        type: 'cases',
        requestType: 'byID',
        params: { id }
    })
    
    return {
        response
    }
    
}

export default useCase

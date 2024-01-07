import useController from '../../library/useController'
// import { useRecoilValue } from 'recoil'

const useCase = (id) => {

    const controller = useController()
    
    const response = controller.get({
        type: 'cases',
        requestType: 'byID',
        params: { id }
    })
    
    return {
        response
    }
    
}

export default useCase

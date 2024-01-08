import useController from '../../library/useController'

const useCases = () => {
    
    const controller = useController()

    const response = controller.get({
        type: 'cases',
        requestType: 'all'
    })
    
   return {
    response
   }
    
}

export default useCases



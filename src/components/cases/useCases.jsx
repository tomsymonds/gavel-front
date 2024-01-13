import useController from '../../library/useController'

const useCases = () => {
    
    const controller = useController()

    const response = controller.infiniteGet({
        type: 'cases',
        requestType: 'all'
    })
    
   return {
    response
   }
    
}

export default useCases



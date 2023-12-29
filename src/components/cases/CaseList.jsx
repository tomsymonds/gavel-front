import useCases from "./useCases"

const CaseList = () => {
    const caseController = useCases()
    console.log(caseController)

    return (
        <div>
            CaseList
        </div>
    )
}

export default CaseList
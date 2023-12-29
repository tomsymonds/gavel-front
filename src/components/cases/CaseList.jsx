import useCases from "./useCases"

const CaseList = () => {
    const caseController = useCases()
    const response = caseController.response.data

    if(!response) return "Loading"

    const cases = response.data

    return (
        <>
            <div>
                CaseList
            </div>
            {
                cases.length > 0 ? 
                    <div>
                        { 
                            cases.map((c) => {
                                return (
                                    <p key = {c.id}>{c.attributes.title}</p>
                                )
                            }) 
                        }
                    </div>
                : "No cases"
            }
        </>
    )
}

export default CaseList
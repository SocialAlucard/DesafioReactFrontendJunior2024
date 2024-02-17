import { useContext } from "react"
import { ButtonFilter } from "../../style/buttonsStyle"
import { FilterTypograpy } from "../../style/typograpy"
import { DivFilter } from "./style"
import { UserContext } from "../../providers/UserContext"

export const Filter = ()=> {
    const {countToDo, filterActive, filterComplete, filterAll} = useContext(UserContext)
    return(
        <>
            <DivFilter>
                <FilterTypograpy>{`${countToDo} Itens left`}</FilterTypograpy>
                <div>
                    <ButtonFilter onClick={()=> filterAll()}>
                        <FilterTypograpy>All</FilterTypograpy>
                    </ButtonFilter>
                    <ButtonFilter onClick={()=> filterActive()}>
                        <FilterTypograpy>Active</FilterTypograpy>
                    </ButtonFilter>
                    <ButtonFilter onClick={()=> filterComplete()}>
                        <FilterTypograpy>Completed</FilterTypograpy>
                    </ButtonFilter>
                </div>
                <ButtonFilter> 
                    <FilterTypograpy>Clear Completed</FilterTypograpy>
                </ButtonFilter>
            </DivFilter>
        </>
    )
}

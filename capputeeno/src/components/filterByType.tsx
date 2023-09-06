import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filterTypes";
import { styled } from "styled-components"

interface FilterItemProps{
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        font-size:16px;
        line-height: 22px;
    }
    
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''}
`

export function FilterByType(){
    
    const { type, setType} = useFilter();

    const handleType = (value: FilterType) => {
        setType(value)
    }

    return(
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => handleType(FilterType.ALL)}>Todos os produtos</FilterItem>
            <FilterItem selected={type === FilterType.SHIRT} onClick={() => handleType(FilterType.SHIRT)}>Camisetas</FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => handleType(FilterType.MUG)}>Canecas</FilterItem>
        </FilterList>
    )
}
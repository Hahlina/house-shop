import { HouseCard } from "common/components";
import { useRealEstateList } from "common/hooks";
import { HousesListStyled } from "./HousesList.styled";

export const HousesList = () => {
    const { data } = useRealEstateList();
    return (
        <HousesListStyled>
            <p className="list-title">List of properties</p>
            <div className="card-list">
                {data?.map((el) => (
                    <HouseCard key={el.id} {...el} />
                ))}
            </div>
        </HousesListStyled>
    );
};

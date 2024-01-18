import { HouseCard } from "common/components";
import { HousesListStyled } from "./HousesList.styled";

export const HousesList = () => {
    const data = Array(6).fill(null);
    return (
        <HousesListStyled>
            <p className="list-title">List of properties</p>
            <div className="card-list">
                {data.map((el) => (
                    <HouseCard key={el} />
                ))}
            </div>
        </HousesListStyled>
    );
};

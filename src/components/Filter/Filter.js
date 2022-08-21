import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contactsApi";
import { SearchWrapper, Label, Input } from "../Filter/Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => dispatch(setFilter(value));

  return (
    <SearchWrapper>
      <Label htmlFor="name">Find contacts by name </Label>
      <div>
        <Input
          type="text"
          name="filter"
          placeholder="Search name"
          onChange={handleChange}
        />
      </div>
    </SearchWrapper>
  );
};

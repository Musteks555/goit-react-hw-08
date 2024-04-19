import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selector";

import css from "./SearchBox.module.css";

const SearchBox = () => {
    const dispatch = useDispatch();

    const selectFilterName = useSelector(selectNameFilter);

    return (
        <>
            <label className={css.contactsLabel}>
                <span>Find contacts by name</span>
                <input type="text" value={selectFilterName} onChange={(event) => dispatch(changeFilter(event.target.value))} />
            </label>
        </>
    );
};

export default SearchBox;

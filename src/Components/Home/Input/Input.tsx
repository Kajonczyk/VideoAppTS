import * as React from "react";
import { StyledInput, StyledWrapper, StyledButton } from "./InputStyles";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../../store/store";
import { getMovie } from "../../../store/actions/getMovie";
export const Input: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((store: RootStore) => store.movie);
  return (
    <StyledWrapper>
      <StyledInput type="text" />
      <StyledButton onClick={() => dispatch(getMovie("lSAz2ONC1rk"))}>
        Add movie
      </StyledButton>
      <div onClick={() => console.log(state?.statistics.likeCount)}>HELLO</div>
    </StyledWrapper>
  );
};

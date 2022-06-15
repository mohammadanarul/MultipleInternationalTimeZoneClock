import styled from "styled-components";

const Select = styled.select`
  background-color: white;
  outline: none;
  border: thin solid #0d9488;
  border-radius: 4px;
  display: block;
  width: 100%;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  margin: 0.3rem 0rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:focus {
    border: thin solid #0d9488;
  }
`;

export default Select;

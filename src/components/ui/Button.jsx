import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-color-500);
  padding: .5rem 1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
    color: #aaaaaa;
    background-color: var(--bg-color-300);
  }
`;
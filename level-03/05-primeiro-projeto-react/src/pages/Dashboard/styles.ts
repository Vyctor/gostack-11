import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 4.8rem;
  color: #3a3a3a;
  max-width: 45rem;
  line-height: 5.6rem;
  margin-top: 8rem;
`;

export const Form = styled.form<FormProps>`
  margin-top: 4rem;
  max-width: 70rem;
  display: flex;

  input {
    flex: 1;
    height: 7rem;
    padding: 0 2.4rem;
    border: 2px solid #fff;
    border-radius: 0.5rem 0 0 0.5rem;
    color: #3a3a3a;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 21rem;
    height: 7rem;
    background: #04d361;
    border-radius: 0 0.5rem 0.5rem 0em;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.7s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 8rem;
  max-width: 70rem;

  a {
    background: #fff;
    border-radius: 0.5rem;
    width: 100%;
    padding: 2.4rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.5s;

    & + a {
      margin-top: 1.6rem;
    }

    &:hover {
      transform: translateX(1rem);
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }

    div {
      margin: 0 1.6rem;
      flex: 1;
      strong {
        font-size: 2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 0.4rem;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.8rem;
  font-size: 1.4rem;
`;

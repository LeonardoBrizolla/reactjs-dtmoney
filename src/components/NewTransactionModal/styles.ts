import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--text-title);
    font-size: 1.5rem;

    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;

    border: 0;
    border-radius: 0.25rem;
    background: var(--green);

    color: #fff;
    font-size: 1rem;
    font-weight: 600;

    margin-top: 1.5rem;
    padding: 0 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

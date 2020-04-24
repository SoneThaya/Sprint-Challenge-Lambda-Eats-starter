import styled from 'styled-components'

export const Styles = styled.div`
  h1 {
    text-align: center;
    color: blue;
  }
  p {
    color: red;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 260px;
    margin: 100px auto;
    border: 1px solid red;
    padding: 10px;
    box-shadow: 10px 10px 5px grey;

    label {
      margin-top: 20px;
    }

    input, select {
      font-size: 1.2em;
    }
    .error {
      color: red;
      font-size: .6em;
    }
    &:hover {
      box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
  }

  button {
    background: green;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 1.2em;
  }
`
import styled from 'styled-components'

interface MeuButtomProps {
  isActive: boolean
  activeColor: 'red' | 'green'
}

const colors = {
  red: '#DDC6BF',
  green: '#D2DCCF'
}

export const MeuButtom = styled.button<MeuButtomProps>`
  display: flex;
  justify-content: center;
  line-height: 4rem;
  border: 0;
  align-items: center;
  width: 236px;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;
  margin: 1rem 0;
  background-color: ${props =>
    props.isActive ? colors[props.activeColor] : 'var(--background)'};
  font-weight: 400;
  font-size: 1rem;

  &:hover {
    border-color: #aaa;
  }

  img {
    margin-right: 1rem;
    height: 20px;
    width: 20px;
  }
`

export const Container = styled.div`
  /* display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`

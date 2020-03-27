import styled from 'styled-components'

const StyledP = styled.p`
  display: ${prop => prop.active ? 'initial' : 'none'};
`

export default StyledP

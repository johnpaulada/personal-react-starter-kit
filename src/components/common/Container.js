import styled from "styled-components"

const DEFAULT_COLOR = "#fafafa"

const Container = styled.div`
  background-color: ${props =>
    "color" in props && props.color ? props.color : DEFAULT_COLOR};
`

export default Container

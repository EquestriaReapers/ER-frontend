import styled from 'styled-components'
import ExperiencesList from './education-list.component'

const LG_SIZE = 1200
const MD_SIZE = 767
const SM_SIZE = 480
const XS_SIZE = 380

export default styled(ExperiencesList)`
  background: #f4f4f4;
  padding: 24px;
  padding-top: 0;
  max-height: 400px;
  overflow-y: auto;
  border-radius: 10px;

  .exp-description-container {
    max-height: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  @media screen and (max-width: ${LG_SIZE}px) {
    max-height: 400px;
  }

  @media screen and (max-width: ${MD_SIZE}px) {
    max-height: 350px;
  }

  @media screen and (max-width: ${SM_SIZE}px) {
    max-height: 300px;
  }

  @media screen and (max-width: ${XS_SIZE}px) {
    max-height: 300px;
  }
`

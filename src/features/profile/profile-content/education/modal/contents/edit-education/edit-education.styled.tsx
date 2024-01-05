import { Box, Button } from '@mui/material'
import EditEducationModalContent from './edit-education.component'
import styled from 'styled-components'

const LG_SIZE = 1200
const MD_SIZE = 767
const SM_SIZE = 480
const XS_SIZE = 380

export default styled(EditEducationModalContent)`
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  .inputStyles {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }

  .inputContainer {
    padding: 5px 0px 5px 0px;
    flex: 1;
  }

  .pr-5px {
    padding-right: 5px;
  }
  .pl-5px {
    padding-left: 5px;
  }

  .mt-5px {
    margin-top: 10px;
  }

  .mb-5px {
    margin-bottom: 10px;
  }

  .exp-header-container {
    margin-bottom: 12px;
  }

  .exp-show-description {
    max-width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: #444444;
    font-family: Inter;
    word-wrap: break-word;
  }

  @media screen and (max-width: ${LG_SIZE}px) {
    width: 650px;
  }

  @media screen and (max-width: ${MD_SIZE}px) {
    width: 400px;

    .exp-show-description {
      max-width: none;
    }

    .exp-show-button {
      width: 100%;
    }
  }

  @media screen and (max-width: ${SM_SIZE}px) {
    width: 300px;

    .inputStyles {
      display: flex;
      flex-direction: column;
    }

    .pr-5px {
      padding-right: 0px;
    }
    .pl-5px {
      padding-left: 0px;
    }
  }

  @media screen and (max-width: ${XS_SIZE}px) {
    width: 250px;
  }
`
export const StyledBox = styled(Box)({
  width: '400px',
  height: '50.037px',
  borderRadius: '4px',
  border: '1px solid #000',
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  '@media screen and (max-width: 767px)': {
    width: '100%'
  }
})

export const StyledButton = styled(Button)({
  flex: 1,
  color: '#000',
  border: 'none',
  borderRadius: 0,
  cursor: 'pointer',
  backgroundColor: '#FFF',
  '&:hover': {
    backgroundColor: '#007935',
    color: '#FFF'
  },
  '&.selected': {
    backgroundColor: '#007935',
    color: '#FFF'
  },
  textTransform: 'none',
  fontFamily: 'Inter',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal'
})

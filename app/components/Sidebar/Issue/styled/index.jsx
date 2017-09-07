import styled from 'styled-components';

export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  height: 80px;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(151, 151, 151, .35);
  // :first-child {
  //   border-top: 1px solid rgba(151, 151, 151, .35);
  //   >img {
  //     opacity: 0.05;
  //   }
  // }
  ${props => props.active && `
    background-color: hsla(216, 78%, 96%, 1);
    border-bottom: 1px solid hsla(216, 48%, 76%, 1);
  `}
  :hover {
    background-color: hsla(216, 58%, 98%, 1);
  }
`;

export const IssueLink = styled.img`
  margin-left: 5px;
  cursor: pointer;
`;

export const IssueName = styled.a`
  font-weight: 700;
  color: ${props => props.theme.primary};
  font-size: 16px;
  cursor: pointer;
`;

export const IssueDescription = styled.div`
  font-size: 13px;
`;

export const IssueType = styled.img`
  height: 16px;
`;

export const IssuePriority = styled.img`
  height: 16px;
  margin-left: 5px;
`;

export const IssueLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  height: 16px;
  background: ${props => props.backgroundColor};
  border-radius: 3px;
  font-size: 12px;
  color: #FFFFFF;
  padding: 0px 4px;
  font-weight: 600;
`;

export const StartTimerButton = styled.img`
  width: 80px;
  cursor: pointer;
  opacity: 0;
  ${IssueContainer}:hover & {
    // opacity: 1;
  }
`;

export const PlaceholderContainer = styled.div`
  border-bottom: 1px solid rgba(151,151,151,.35);
  height: 160px;
  max-height: 80px;
  padding: 10px 20px;
`;

// Placeholders
//
// .
export const Placeholder = styled.div`
  background: #fff;
  position: absolute;  ${(props) => {
    switch (props.type) {
      case 'issueRight':
        return `
          width: auto;
          right: 0;
          top: 0px;
          height: 20px;
          left: 120px;
        `;
      case 'issueBottom':
        return `
          position: absolute;
          width: auto;
          top: 18px;
          left: 0;
          right: 0;
          height: 8px;
        `;
      case 'descriptionRight':
        return `
          top: 26px;
          left: 320px;
          width: auto;
          right: 0;
          height: 16px;
        `;
      case 'descriptionBottom':
        return `
          width: auto;
          right: 0;
          height: 16px;
          left: 0;
          top: 38px;
        `;
      case 'attributesRight':
        return `
          background: #fff;
          position: absolute;
          width: auto;
          right: 0;
          top: 54px;
          height: 14px;
          left: 160px;
        `;
      case 'attributesBottom':
        return `
          background: #fff;
          position: absolute;
          width: auto;
          top: 68px;
          left: 0px;
          right: 0;
          height: 16px;
        `;
      default:
        return '';
    }
  }}
`;

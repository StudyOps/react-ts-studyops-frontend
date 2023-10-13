import styled from '@emotion/styled';

const ProfileImage = styled.div<{
  url: string;
  height: string;
  width: string;
}>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: 50px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default ProfileImage;

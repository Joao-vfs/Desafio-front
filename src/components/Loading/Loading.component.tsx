import * as S from "./Loading.styles";

import Box from "@/global/layout/Box/Box.layout";

function LoadingComponent() {
  return (
    <Box
      display="flex"
      width="100%"
      height="calc(100vh - 175px)"
      justify-content="center"
      align-items="center"
    >
      <S.Spinner />
    </Box>
  );
}

export default LoadingComponent;

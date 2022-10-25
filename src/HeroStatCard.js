import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@mui/material";

export const HeroStatCard = ({ title, value }) => {
  return (
    <Card>
      <HeroStat>
        <HeroStatNumber variant="h1">{value}</HeroStatNumber>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      </HeroStat>
    </Card>
  );
};

const HeroStat = styled(CardContent)`
  text-align: center;
`;

const HeroStatNumber = styled(Typography)`
  color: #51c02a;
`;

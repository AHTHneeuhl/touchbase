import { Box, Stack, Typography } from "@mui/material";

type TProps = {
  firstName: string;
  lastName: string;
  profession: string;
  company: string;
};

const User: React.FC<TProps> = ({
  firstName,
  lastName,
  profession,
  company,
}) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Box
        sx={{
          borderRadius: "50%",
          background:
            "linear-gradient(180deg, rgba(230,230,255,1) 0%, rgb(192, 192, 248) 100%)",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontWeight="normal" fontSize="32px" color="#0000ff">
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </Typography>
      </Box>
      <Stack direction="column">
        <Typography fontSize="20px" fontWeight="normal" color="#000000">
          {firstName} {lastName}
        </Typography>
        <Typography fontSize="14px" fontWeight="normal" color="#bbbbfd">
          {profession} @ {company}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default User;

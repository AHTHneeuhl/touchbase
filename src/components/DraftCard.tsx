import {
  ContentCopyOutlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

const DraftCard: React.FC = () => {
  return (
    <Box py={1} px={2} sx={{ backgroundColor: "#e6e6ff", borderRadius: "4px" }}>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        sx={{ borderBottom: "0.3px solid #0000ff70" }}
      >
        <Typography>Draft</Typography>
        <Button
          color="primary"
          startIcon={<ContentCopyOutlined />}
          sx={{ textTransform: "none" }}
        >
          Copy
        </Button>
      </Stack>
      <Typography fontSize={14} color="#3f3f3f" py={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error
        porro incidunt, asperiores laborum facere molestiae labore. Error,
        facilis consequuntur. Atque, neque? Dolor dolorum eligendi odio tempore
        natus, laborum corrupti!
      </Typography>
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="start"
      >
        <IconButton color="primary" size="small">
          <ThumbUpAltOutlined sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton color="primary" size="small">
          <ThumbDownAltOutlined sx={{ fontSize: 16 }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default DraftCard;

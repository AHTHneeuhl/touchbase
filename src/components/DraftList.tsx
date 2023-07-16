import { Stack } from "@mui/material";
import drafts from "config/drafts";
import DraftCard from "./DraftCard";

const DraftList: React.FC = () => {
  return (
    <Stack spacing={1} direction="column">
      {drafts.map(({ id, message }) => (
        <DraftCard key={id} message={message} />
      ))}
    </Stack>
  );
};

export default DraftList;

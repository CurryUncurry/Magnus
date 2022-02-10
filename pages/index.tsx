import { Box } from "@chakra-ui/react";
import Link from "next/link";

const App = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <div>Some landing page</div>
      <Link href="/dashboard">
        <a>Launch App</a>
      </Link>
    </Box>
  );
};

export default App;

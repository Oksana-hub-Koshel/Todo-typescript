import { useRouteError } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import React from "react";

export default function ErrorPage() {
  // const error: any = useRouteError();

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        {/*<i>{error.statusText || error.message}</i>*/}
      </Typography>
    </Container>
  );
}

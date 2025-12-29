import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import PrayingMan from "@/Assests/prayingman.jpg";

import Image from "next/image";
import { Button, Container, Stack } from "@mui/material";
import { strings } from "@/utils";
import { Send } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        spacing={2}
      >
          <Grid size={6}>
    <Image
            src={PrayingMan}
            width={500}
            height={800} alt={""}    />
          </Grid>
          <Grid size={6}>
            <Stack spacing={5}>
            <Typography variant="body1">
              {strings.PrivateClassIntroduction}
            </Typography>
        
            <Typography variant="body1">
              {strings.PrivateClassOutline}
            </Typography> <Button
            component={Link}
            href={`/book-a-class/privateClass`}
            variant="outlined"
            endIcon={<Send />}
          >
            Book now
          </Button>
            </Stack>
          </Grid>
      </Grid>
    </Container>
  );
}

import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import PrayingMan from "@/Assets/prayingman.jpg";

import Image from "next/image";
import { Button, Container, Stack } from "@mui/material";
import { strings } from "@/utils";
import { Send } from "@mui/icons-material";
import Link from "next/link";
import { Divider } from "@/components";

export default function Home() {
  return (
    <Container maxWidth={"lg"}>
        <Grid size={12} sx={{mb: "2%"}}>
          <Typography
            variant="h1"
            sx={{ fontSize: "2.25rem", fontWeight: "300" }}
            textAlign={"center"}
          >
            {strings.PrivateClassesTitle}
          </Typography>
          <Grid size={12}>
            <Divider orientation="horizontal" />
          </Grid>
        </Grid>

      <Grid
        container
        spacing={2}
        
      >
        <Grid
          size={{ md: 6, xs: 12 }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Image
            src={PrayingMan}
            width={500}
            height={800}
            alt={""}
          />
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Stack spacing={5}>
            <Typography variant="body1">
              {strings.PrivateClassIntroduction}
            </Typography>
            <Typography variant="body1">
              {strings.PrivateClassOutline}
            </Typography>{" "}
            <Button
              component={Link}
              href={`/book-a-class/privateClass`}
              variant="outlined"
              endIcon={<Send />}
            >
              Book now
            </Button>
            <Grid
              size={{ md: 6, xs: 12 }}
              sx={{ display: { md: "none" } }}
            >
              <Image
                src={PrayingMan}
                width={300}
                height={600}
                alt={""}
              />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import YogiClass from "@/Assets/yogi-class.jpg";
import Image from "next/image";
import { Button, Container
 } from "@mui/material";
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
            {strings.YogaNidraPageTitle}
          </Typography>
          <Grid size={12}>
            <Divider orientation="horizontal" />
          </Grid>
        </Grid>

      <Grid
        container
        spacing={4}
      >
        <Grid size={12}>
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic" }}
          >
            {strings.YogaNidraIntroduction}
          </Typography>
          <Typography variant="body1" textAlign="right" sx={{mt: "0.75%"}}>{strings.YogaNidraAuthor}</Typography>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography variant="body1">
            {strings.YogaNidraDescription}
          </Typography>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography variant="body1">
            {strings.YogaNidraClassOutline}
          </Typography>
        </Grid>
        <Grid size={12}><Divider orientation="horizontal"/></Grid>
        <Grid size={12}>
          <Typography variant="h5">Important Information</Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body1" textAlign={'center'} sx={{pl: "15%", pr: "15%", fontWeight: "bold"}}>
            {strings.YogaNidraClassLogistics}
          </Typography>
        </Grid>
        <Grid offset={"auto"}>
          <Button
            component={Link}
            href={`/book-a-class/yogaNidra`}
            variant="outlined"
            endIcon={<Send />}
          >
            Book now
          </Button>
        </Grid>
        <Grid
          size={12}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Image
            src={YogiClass}
            alt="Yoga class"
            width={1200}
            height={800}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

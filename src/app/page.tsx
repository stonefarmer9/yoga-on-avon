import Typography from '@mui/material/Typography';
import * as React from 'react';
import Grid from '@mui/material/Grid2';
import BigSmile from "@/Assets/big-smile-sm.jpg"
import WarriorPose from "@/Assets/warrior-pose.jpg";
import Image from "next/image";
import { Container, Divider } from '@mui/material';
import { strings } from '@/utils';


export default function Home() {

  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        columnSpacing={4}
        rowSpacing={12}
      >
        <Grid size={12}>
          <Typography
            variant="h1"
            sx={{ fontSize: "2.25rem", fontWeight: "300" }}
            textAlign={"center"}
          >
            {strings.Welcome}
          </Typography>
          <Grid size={12}>
            <Divider orientation="horizontal" />
          </Grid>
        </Grid>

        <Grid
          size={{ md: 5, xs: 12 }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Image
            src={BigSmile}
            alt="Georges Le Vaillant teaching yoga nidra"
            width={400}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </Grid>
        <Grid
          size={{ md: 5, xs: 12 }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Image
            src={BigSmile}
            alt="Georges Le Vaillant teaching yoga nidra"
            width={300}
            height={400}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </Grid>

        <Grid size={{ md: 7, xs: 12 }}>
          <Typography
            variant="body1"
            sx={{mb: "2.5%", mt: {md: "10%"}}}
          >
            {strings.Introduction}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textIndent: "2em" }}
          >
            {strings.Information}
          </Typography>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Typography
            variant="body1"
            sx={{ textIndent: "2em", marginBottom: "2.5%" }}
          >
            {strings.InformationTwo}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textIndent: "2em" }}
          >
            {strings.InformationThree}
          </Typography>
        </Grid>
        <Grid
          size={8}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Image
            src={WarriorPose}
            alt="Georges Le Vaillant teaching yoga nidra"
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </Grid>
      </Grid>
    </Container>
  );
}


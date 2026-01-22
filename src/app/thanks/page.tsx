import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import BigSmile from "@/Assets/big-smile-sm.jpg";
import WarriorPose from "@/Assets/warrior-pose.jpg";
import Image from "next/image";
import { Container } from "@mui/material";
import { strings } from "@/utils";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        columnSpacing={4}
        rowSpacing={12}
      >
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

        <Grid size={{ md: 6, xs: 12 }}>
          <Typography
            variant="h4"
            sx={{ mb: "2.5%", mt: { md: "10%" } }}
          >
            {strings.ThankyouForContacting}
          </Typography>
          <Typography
            sx={{ mb: "2.5%", mt: { md: "10%" } }}
            variant="h5"
          >
            {strings.ThanksTwo}
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL_ADDRESS}
            {strings.ThanksThree}
          </Typography>
          <Typography
            sx={{ mb: "2.5%", mt: { md: "10%" }, textDecoration: "underline" }}
            color={"info"}
            variant="subtitle1"
          >
            <Link href="/">{strings.ReturnHome}</Link>
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

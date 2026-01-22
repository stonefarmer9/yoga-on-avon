'use client';
import Grid from "@mui/material/Grid2";

import { Button, ButtonGroup, Typography, Tooltip, Snackbar } from '@mui/material';
import { ContentCopy, Email } from '@mui/icons-material';
import { useState } from 'react';
import { strings } from '@/utils';

export const EmailContact = () => {
  const [open, setOpen] = useState(false);
  const email = `${process.env.NEXT_PUBLIC_CONTACT_EMAIL_ADDRESS}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setOpen(true);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
        <Grid size={{ xs: 12, sm: 3 }}>
          <Typography
            variant="body2"
            color="text.primary"
          >
           
           {strings.AlternativeContactMethod}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 9 }}>
          <ButtonGroup
            variant="outlined"
            size="small"
          >
            <Tooltip title="Open in email client">
              <Button
                href={`mailto:${email}`}
                startIcon={<Email />}
                sx={{ textTransform: "none" }}
              >
                {email}
              </Button>
            </Tooltip>
            <Tooltip title="Copy email">
              <Button onClick={handleCopy}>
                <ContentCopy fontSize="small" />
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message={strings.EmailTooltip}
      />
    </>
  );
};
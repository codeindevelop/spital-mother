import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, BarbackgroundColor }: { theme: any; BarbackgroundColor: string }) => ({
    height: 5,
    borderRadius: 2,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800]
      })
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 1,
      backgroundColor: `${BarbackgroundColor}`,
      ...theme.applyStyles('dark', {
        backgroundColor: `${BarbackgroundColor}`
      })
    }
  })
);

function ProgressBars({
  value,
  variant,
  BarbackgroundColor,
  theme
}: {
  value: number;
  variant: 'determinate' | 'indeterminate' | 'buffer' | 'query' | undefined;
  BarbackgroundColor: string;
  theme: any;
}) {
  return (
    <BorderLinearProgress
      theme={theme}
      variant={variant}
      value={value}
      BarbackgroundColor={BarbackgroundColor}
    />
  );
}

export { ProgressBars };

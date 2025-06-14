import { toAbsoluteUrl } from '@/utils';
import CircularProgress from '@mui/material/CircularProgress';
import PageTitle from '../page-title/PageTitle';
const ScreenLoader = () => {
  return (
    <>
      <PageTitle name="درحال بارگزاری ..." />
      <div className="flex flex-col items-center gap-5 justify-center fixed inset-0 z-50 bg-light transition-opacity duration-700 ease-in-out">
        <img
          className="h-[80px] max-w-none animate-bounce"
          src={toAbsoluteUrl('/media/logo/logo.svg')}
          alt="Spital logo"
        />
        <div className="text-gray-500 font-medium text-sm">در حال بارگزاری</div>
        <CircularProgress
          sx={{
            color: (theme) => theme.palette.grey[theme.palette.mode === 'dark' ? 200 : 800]
          }}
          color="inherit"
          size={20}
          thickness={4}
        />
      </div>
    </>
  );
};

export { ScreenLoader };

import { RecentUploads } from '@/pages/public-profile/profiles/default';
import {
  BasicSettings,
  CalendarAccounts,
  CommunityBadges,
  Connections,
  PersonalInfo,
  StartNow,
  Work
} from './blocks';

import { useAppSelector } from '@/store/hooks';

const UserProfileContent = () => {
  const userData: any = useAppSelector((state) => state.auth.profile.data);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <PersonalInfo user={userData} />

          <BasicSettings user={userData} />

          <Work user={userData} />

          {/* <CommunityBadges /> */}
        </div>
      </div>

      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <StartNow />

          {/* <CalendarAccounts /> */}

          {/* <Connections url="#" /> */}

          {/* <RecentUploads title="My Files" /> */}
        </div>
      </div>
    </div>
  );
};

export { UserProfileContent };

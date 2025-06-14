import { MiscFaq, MiscHelp2 } from '@/partials/misc';

import { Users } from './blocks';

const UsersListContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Users />

      <MiscFaq />

      <MiscHelp2 />
    </div>
  );
};

export { UsersListContent };

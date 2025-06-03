import React from 'react';
import UserInfoBlock from './blocks/UserInfoBlock';
import PersonalInfoBlock from './blocks/personalInfo/PersonalInfoBlock';

function ShowEditUserForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <UserInfoBlock />
      <PersonalInfoBlock />
    </div>
  );
}

export default ShowEditUserForm;

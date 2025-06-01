import React, { useEffect } from 'react';

import { DataGrid } from '@/components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAllUsersAction } from '@/modules/user/actions/users/getAllUsersAction';

const Users = () => {
  const dispatch = useAppDispatch();
  // Fetch all users data when the component mounts
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  // Select users from Redux state
  const UsersData: any = useAppSelector((state) => state.users.users.users);

  return (
    <>
      <DataGrid
        // key={column.id}
        data={UsersData}
        columns={[
          // {
          //   accessorKey: 'id',
          //   header: 'شناسه کاربر',

          //   size: 10
          // },
          {
            accessorKey: 'first_name',
            header: ' نام'
          },
          {
            accessorKey: 'last_name',
            header: 'نام خانوادگی'
          },

          {
            accessorKey: 'mobile_number',
            header: 'موبایل'
          },
          {
            accessorKey: 'email',
            header: 'ایمیل'
          },
          {
            accessorKey: 'roles',
            header: 'نقش',
            cell: ({ row }: { row: any }) => {
              const roles = row.getValue('roles');
              return (
                <span className="flex flex-wrap gap-1">
                  {roles.map((role: { uuid: string; name: string }) => (
                    <span key={role.uuid} className="">
                      {role.name}
                    </span>
                  ))}
                </span>
              );
            }
          },
          {
            accessorKey: 'created_at',
            header: 'تاریخ ثبت نام',
            cell: ({ row }: { row: any }) => {
              const createdAt = row.getValue('created_at');
              return new Date(createdAt).toLocaleDateString('fa-IR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              });
            }
          },
          {
            accessorKey: 'active',
            header: ' وضعیت',
            cell: ({ row }: { row: any }) => {
              const isActive = row.getValue('active');
              return (
                <span className={`badge ${isActive ? 'badge-success' : 'badge-error'}`}>
                  {isActive ? 'فعال' : 'غیرفعال'}
                </span>
              );
            }
          }
        ]}
        // rowSelection={[]}
        onRowSelectionChange={() => {}}
      >
        {/* <DataGridColumnHeader column={undefined} />
        <DataGridColumnVisibility table={undefined} />
        <DataGridRowSelect row={undefined} /> */}
        {/* <DataGridRowSelectAll /> */}
      </DataGrid>
    </>
  );
};

export { Users };

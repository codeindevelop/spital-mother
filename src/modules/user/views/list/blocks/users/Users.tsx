/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import { DataGrid, DataGridRowSelectAll } from '@/components';
import { toast } from 'sonner';

import { getAllUsers } from '@/modules/user/actions/usersList/usersListAction';
import { UsersModel } from '@/modules/user/models/_models';

const Users = () => {
  const [UsersData, setUsersData] = useState<UsersModel[]>([]);
  // Define the input filter component for columns
  useEffect(() => {
    // Fetch all users data when the component mounts
    getAllUsers()
      .then((response) => {
        // Adjust this according to your API response structure
        setUsersData(response.data?.data.users || []);
      })
      .catch(() => {
        toast.error('خطا در دریافت کاربران');
        setUsersData([]);
      });
  }, []);

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

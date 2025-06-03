import React, { useEffect, useMemo, useState } from 'react';

import {
  DataGrid,
  DataGridColumnHeader,
  DataGridColumnVisibility,
  DataGridRowSelect,
  DataGridRowSelectAll,
  KeenIcon,
  useDataGrid
} from '@/components';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAllUsersAction } from '@/modules/user/actions/users/getAllUsersAction';
import { useLanguage } from '@/i18n';
import { Column, ColumnDef, RowSelectionState } from '@tanstack/react-table';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { toAbsoluteUrl } from '@/utils';
import { storeUserId } from '@/modules/user/store/Show/showUserReducer';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const dispatch = useAppDispatch();
  const { isRTL } = useLanguage();
  const storageFilterId = 'members-filter';
  // Fetch all users data when the component mounts
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  // Select users from Redux state
  const UsersData: any = useAppSelector((state) => state.users.users.users);
  const loading: boolean = useAppSelector((state) => state.users.users.loadingTable);

  interface IColumnFilterProps<TData, TValue> {
    column: Column<TData, TValue>;
  }

  const ColumnInputFilter = <TData, TValue>({ column }: IColumnFilterProps<TData, TValue>) => {
    return (
      <Input
        placeholder="Filter..."
        value={(column.getFilterValue() as string) ?? ''}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="h-9 w-full max-w-40"
      />
    );
  };

  const navigate = useNavigate();
  const handleUserShow = (id: any) => {
    dispatch(storeUserId(id));
    // Navigate to the user show page
    // Assuming you have a route set up for showing user details
    navigate(`/user/show/user?id=${id}`);
  };
  interface IUsersData {
    personal_info: {
      first_name: string;
      last_name: string;
      profile_image?: string;
    };
    roles: [
      {
        id: string;
        name: string;
      }
    ];
    verify: {};
    id: string;
    email: string;
    mobile_number?: string;
    created_at: string;
    active: string | number;
  }

  const columns = useMemo<ColumnDef<IUsersData>[]>(
    () => [
      {
        accessorKey: 'id',
        header: () => <DataGridRowSelectAll />,
        cell: ({ row }) => <DataGridRowSelect row={row} />,
        enableSorting: false,
        enableHiding: false,
        meta: {
          headerClassName: 'w-0'
        }
      },
      {
        accessorFn: (row) => row.personal_info,
        accessorKey: 'personal_info',
        id: 'نام و نام خانوادگی',
        header: ({ column }) => (
          <DataGridColumnHeader
            title="نام و نام خانوادگی"
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        enableSorting: true,
        cell: (user) => (
          <div className="flex items-center gap-2.5">
            <div className="shrink-0">
              <img
                src={
                  user.row.original.personal_info?.profile_image
                    ? user.row.original.personal_info.profile_image
                    : toAbsoluteUrl('/media/avatars/blank.png')
                }
                className="h-9 rounded-full"
                alt={user.row.original.personal_info?.first_name}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="leading-none font-medium text-sm text-gray-900 hover:text-primary">
                {user.row.original.personal_info?.first_name}{' '}
              </h2>
              <span className="text-2sm text-gray-700 font-normal">
                {user.row.original.personal_info?.last_name}
              </span>
            </div>
          </div>
        ),
        meta: {
          headerClassName: 'min-w-[200px]',
          cellClassName: 'text-gray-700 font-normal'
        }
      },
      {
        accessorFn: (row) => row.email,
        id: 'ایمیل',
        header: ({ column }) => <DataGridColumnHeader title="ایمیل" column={column} />,
        enableSorting: true,
        cell: (info) => (
          <span className="text-gray-700 font-normal">
            {info.row.original.email || 'بدون ایمیل'}
          </span>
        ),
        meta: {
          headerClassName: 'min-w-[155px]',
          cellClassName: 'text-gray-700 font-normal text-[0.830rem] tracking-normal  text-center '
        }
      },
      {
        accessorFn: (row) => row.mobile_number,
        id: 'شماره موبایل',
        header: ({ column }) => <DataGridColumnHeader title="شماره موبایل" column={column} />,

        enableSorting: true,
        cell: (info) => (
          <span className="text-gray-700 font-normal">
            {info.row.original.mobile_number || 'بدون شماره موبایل'}
          </span>
        ),
        meta: {
          headerClassName: 'min-w-[165px]',
          cellClassName: 'text-gray-700 font-normal text-center font-estedad tracking-normal '
        }
      },
      {
        accessorFn: (row) => row.roles,
        id: 'نقش ها',
        header: ({ column }) => <DataGridColumnHeader title="نقش ها" column={column} />,
        enableSorting: true,
        cell: (info) => (
          <div className="flex flex-wrap gap-2.5 mb-2">
            <span className="badge badge-sm badge-light badge-outline">
              {info.row.original.roles.map(
                (role) =>
                  (role.name === 'admin' && 'مدیر') ||
                  (role.name === 'regular-user' && 'کاربر عادی') ||
                  role.name
              )}
            </span>
          </div>
        ),
        meta: {
          headerClassName: 'min-w-[100px]',
          cellClassName:
            'text-gray-700 font-normal text-center flex flex-wrap justify-center gap-2.5'
        }
      },
      {
        accessorFn: (row) => row.active,
        id: 'وضعیت',
        header: ({ column }) => <DataGridColumnHeader title="وضعیت" column={column} />,
        enableSorting: true,
        cell: (info) => (
          <span className={`badge badge-sm badge-outline   `}>
            {info.row.original.active === 1 ? (
              <span className="text-green-600">فعال</span>
            ) : (
              <span className="text-red-600">غیرفعال</span>
            )}
          </span>
        ),
        meta: {
          headerClassName: 'min-w-[100px]',
          cellClassName: 'text-gray-700 font-normal text-center'
        }
      },
      {
        accessorFn: (row) => row.id,
        id: 'عملیات',
        header: ({ column }) => (
          <DataGridColumnHeader
            className="text-center w-full mx-auto"
            title="عملیات"
            column={column}
          />
        ),
        enableSorting: true,
        cell: (info) => (
          <div>
            <button
              className="btn btn-icon btn-light btn-sm me-2"
              onClick={() => handleUserShow(info.row.original.id)}
            >
              <KeenIcon
                icon="notepad-edit"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
            <button
              className="btn btn-icon btn-light btn-sm me-2"
              onClick={() => console.log('Edit user', info.row.original.id)}
            >
              <KeenIcon
                icon="trash"
                className="text-gray-500 text-lg hover:text-primary transition-colors duration-200"
              />
            </button>
          </div>
        ),
        meta: {
          headerClassName: 'min-w-[100px]',
          cellClassName: 'text-gray-700 font-normal text-center'
        }
      }
    ],
    []
  );

  const handleRowSelection = (state: RowSelectionState) => {
    const selectedRowIds = Object.keys(state);

    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo')
        }
      });
    }
  };

  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem(storageFilterId) || '';
  });

  useEffect(() => {
    localStorage.setItem(storageFilterId, searchTerm);
  }, [searchTerm]);

  const Toolbar = () => {
    const { table } = useDataGrid();

    return (
      <div className="card-header px-5 py-5 border-b-0 flex-wrap gap-2">
        <h3 className="card-title text-md">تمام کاربران</h3>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative">
            <KeenIcon
              icon="magnifier"
              className="leading-none text-md text-gray-500 absolute top-1/2 start-0 -translate-y-1/2 ms-3"
            />
            <input
              type="text"
              placeholder="جستجوی کاربران"
              className="input input-sm ps-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </div>
          <DataGridColumnVisibility table={table} />
          <label className="switch switch-sm">
            <input name="check" type="checkbox" value="1" className="order-2" readOnly />
            <span className="switch-label order-1">کاربران فعال</span>
          </label>
        </div>
      </div>
    );
  };
  return (
    <>
      {loading ? (
        <div className="card h-full flex items-center justify-center">
          <div className="card-body">
            <div className=" flex flex-col gap-2 items-center justify-center h-full">
              <CircularProgress
                sx={{
                  color: (theme) => theme.palette.grey[theme.palette.mode === 'dark' ? 200 : 800]
                }}
                color="inherit"
                size={20}
                thickness={4}
              />
              <span className="text-gray-700 text-lg">در حال بارگذاری...</span>
              <br />
              <span className="text-gray-500 text-sm text-center">
                این عملیات ممکن است چند دقیقه طول بکشد
              </span>
              <br />
            </div>
          </div>
        </div>
      ) : (
        <DataGrid
          data={UsersData}
          columns={columns}
          rowSelection={true}
          onRowSelectionChange={handleRowSelection}
          toolbar={<Toolbar />}
          pagination={{ size: 10 }}
          sorting={[{ id: 'id', desc: false }]}
          layout={{ card: true }}
        />
      )}
    </>
  );
};

export { Users };

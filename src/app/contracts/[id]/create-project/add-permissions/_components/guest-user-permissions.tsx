import Input from '@/common/components/form-components/input-field';
import { PermissionConfigurations } from '@/common/constants/project/project-permission-contants';
import { ProjectPermissionEnum } from '@/common/types/enums/project/permission';
import { PermissionProps } from '@/common/types/interfaces/project/permission';
import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import SwitchField from '../../settings/_components/switch-field';

const GuestUserPermissions: FC<PermissionProps> = ({
  formik,
  setOpenModal,
  setPermissionKey,
  type,
}) => {
  return (
    <div className='space-y-4'>
      {Object.entries(PermissionConfigurations).map(([key, value]) => (
        <div
          key={key}
          className='rounded-lg border'
        >
          <div className='bg-gray-100 p-4'>
            <p className='font-semibold text-xl'>{key}</p>
            <p>{value.mainSubText}</p>
          </div>
          {value.fields.map((field, index) => (
            <div
              key={index}
              className='grid grid-cols-2'
            >
              <div className='flex flex-col justify-center px-4 py-8'>
                <p className='font-semibold text-lg'>{field.title}</p>
                <p className='text-gray-500 text-sm'>{field.subText}</p>
              </div>
              {field.type === 'radio' ? (
                <div className='space-y-4 flex flex-col justify-center p-4'>
                  {field.radioFields.map((item, index) => {
                    const roleKey = (type ??
                      value.key) as keyof typeof formik.values;
                    const roleData = formik.values[roleKey];

                    if (typeof roleData !== 'boolean') {
                      const permissionKey =
                        ProjectPermissionEnum[
                          field.title as keyof typeof ProjectPermissionEnum
                        ];
                      const formikValue =
                        roleData[permissionKey]?.select_type === item.value;
                      return (
                        <div key={index}>
                          <div
                            className='flex gap-4 sm:p-2 p-0 cursor-pointer items-center'
                            onClick={() =>
                              formik.setFieldValue(
                                `${type ?? value.key}.${ProjectPermissionEnum[field.title as keyof typeof ProjectPermissionEnum]}.select_type`,
                                item.value,
                              )
                            }
                          >
                            <div
                              className={`border-2 ${formikValue ? 'border-primary' : ''} rounded-full h-max p-1 cursor-pointer`}
                            >
                              <div
                                className={`h-3 w-3 rounded-full ${formikValue ? 'bg-primary' : 'bg-white'}`}
                              ></div>
                            </div>
                            <div>
                              <p className='text-lg font-semibold'>
                                {item.title}
                              </p>
                              <p className='text-gray-500'>{item.subText}</p>
                            </div>
                          </div>
                          {field.radioFields.length === index + 1 && (
                            <Button
                              type='button'
                              disabled={(() => {
                                const roleKey = (type ??
                                  value.key) as keyof typeof formik.values;
                                const roleData = formik.values[roleKey];

                                if (typeof roleData === 'boolean') return true; // disable if invalid access

                                const permissionKey =
                                  ProjectPermissionEnum[
                                    field.title as keyof typeof ProjectPermissionEnum
                                  ];

                                return (
                                  roleData?.[permissionKey]?.select_type ===
                                  'view_all'
                                );
                              })()}
                              className='text-primary bg-white hover:bg-white border border-primary w-max ml-10'
                              onClick={() => {
                                setPermissionKey({
                                  parent_key: type ?? value.key,
                                  permission_key: `${ProjectPermissionEnum[field.title as keyof typeof ProjectPermissionEnum]}`,
                                });
                                setOpenModal(true);
                              }}
                            >
                              Select Taxonomy
                            </Button>
                          )}
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                (() => {
                  const roleKey = (type ??
                    value.key) as keyof typeof formik.values;
                  const roleData = formik.values[roleKey];

                  if (typeof roleData !== 'boolean') {
                    const permissionKey =
                      ProjectPermissionEnum[
                        field.title as keyof typeof ProjectPermissionEnum
                      ];
                    const formikValue = roleData[permissionKey];
                    return (
                      <div className='flex gap-6 justify-end p-4 duration-200'>
                        {field.inputField && (
                          <div
                            className={`${!formikValue?.is_enabled && field.inputField ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            <p>{field.inputField.title}</p>
                            <p className='text-gray-500'>
                              {field.inputField.subText}
                            </p>
                            <Input
                              name={`${type ?? value.key}.${ProjectPermissionEnum[field.title as keyof typeof ProjectPermissionEnum]}.value`}
                              placeholder='Enter value'
                              type='number'
                              value={formikValue?.value || ''}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              disabled={
                                !formikValue?.is_enabled && !!field.inputField
                              }
                              className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance- ${
                                !formikValue?.is_enabled && field.inputField
                                  ? 'cursor-not-allowed'
                                  : ''
                              }`}
                            />
                          </div>
                        )}
                        <SwitchField
                          switchText='On'
                          field={formikValue?.is_enabled || false}
                          setField={checked =>
                            formik.setFieldValue(
                              `${type ?? value.key}.${ProjectPermissionEnum[field.title as keyof typeof ProjectPermissionEnum]}.is_enabled`,
                              checked,
                            )
                          }
                        />
                      </div>
                    );
                  }
                })()
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GuestUserPermissions;

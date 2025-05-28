import DataLoader from '@/common/components/common/data-loader';
import DynamicModal from '@/common/components/modals/dynamic-modal';
import { BasicModalProps } from '@/common/types/interfaces/common';
import {
  PermissionsConfig,
  UserRolePermissions,
} from '@/common/types/interfaces/project/permission';
import { TaxonomyGroup } from '@/common/types/interfaces/project/taxonomies';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormikProps } from 'formik';
import { FC, useEffect, useState } from 'react';

export interface TaxonomiesModalProps extends BasicModalProps {
  permission_key: {
    parent_key: string;
    permission_key: string;
  };
  formik: FormikProps<PermissionsConfig>;
  taxonomies: TaxonomyGroup | undefined;
  isLoading: boolean;
}

const TaxonomiesModal: FC<TaxonomiesModalProps> = ({
  formik,
  permission_key,
  openModal,
  setOpenModal,
  taxonomies,
  isLoading,
}) => {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    const rolePermissions =
      formik.values[permission_key.parent_key as keyof PermissionsConfig];

    if (typeof rolePermissions === 'object' && rolePermissions !== null) {
      const formikTaxonomies =
        rolePermissions[
          permission_key.permission_key as keyof UserRolePermissions
        ]?.taxonomies;

      if (formikTaxonomies) {
        setIds(formikTaxonomies);
      }
    }
  }, [formik]);

  const handleSubmit = () => {
    formik.setFieldValue(
      `${permission_key.parent_key}.${permission_key.permission_key}.taxonomies`,
      ids,
    );
    setOpenModal(false);
  };

  return (
    <DynamicModal
      title='Select Visible User'
      subText='Choose the taxonomies this user can access. Only users within these taxonomy will be visible to them.'
      openModal={openModal}
      setOpenModal={setOpenModal}
      className='min-w-1/2 px-16'
    >
      <Accordion
        type='single'
        collapsible
        className='h-full space-y-4'
      >
        {isLoading ? (
          <DataLoader />
        ) : taxonomies &&
          Object.keys(taxonomies).length > 0 &&
          Object.values(taxonomies)[0].length > 0 ? (
          <div className='space-y-4'>
            {Object.entries(taxonomies).map(
              ([key, value]) =>
                value.length > 0 && (
                  <AccordionItem
                    key={key}
                    value={key}
                  >
                    <AccordionTrigger className='cursor-pointer text-lg'>
                      {key}
                    </AccordionTrigger>
                    {value.map(item => (
                      <AccordionContent
                        key={item.id}
                        className='flex gap-2 items-center border-b p-4 cursor-pointer'
                        onClick={() => {
                          if (item.id === undefined) return;
                          const isChecked = ids?.includes(item.id || 0);
                          const updated = isChecked
                            ? ids?.filter(id => id !== item.id)
                            : [...(ids || []), item.id];
                          setIds(updated);
                        }}
                      >
                        <Checkbox
                          checked={ids?.includes(item.id || 0) ?? false}
                          onCheckedChange={checked =>
                            checked
                              ? [...(ids || []), item.id]
                              : ids?.filter(id => id !== item.id)
                          }
                          className='cursor-pointer h-5 w-5'
                        />
                        <p className='text-base'>{item.name}</p>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                ),
            )}
            <div className='flex justify-end gap-4 '>
              <Button
                type='button'
                className='bg-white hover:bg-white border border-primary-hex text-primary-hex'
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                onClick={handleSubmit}
              >
                Confirm Selection
              </Button>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center text-gray-500 p-12'>
            No taxonomies created yet...
          </div>
        )}
      </Accordion>
    </DynamicModal>
  );
};

export default TaxonomiesModal;

// {value.map(item => {
//   const rolePermissions =
//     formik.values[
//       permission_key.parent_key as keyof PermissionsConfig
//     ];

//   if (
//     typeof rolePermissions === 'object' &&
//     rolePermissions !== null
//   ) {
//     const formikTaxonomies =
//       rolePermissions[
//         permission_key.permission_key as keyof UserRolePermissions
//       ]?.taxonomies;
//     return (
//       <AccordionContent
//         key={item.id}
//         className='flex gap-2 items-center border-b p-4 cursor-pointer'
//         onClick={() => {
//           const isChecked = formikTaxonomies?.includes(
//             item.id || 0,
//           );
//           const updated = isChecked
//             ? formikTaxonomies?.filter(id => id !== item.id)
//             : [...(formikTaxonomies || []), item.id];

//           formik.setFieldValue(
//             `${permission_key.parent_key}.${permission_key.permission_key}.taxonomies`,
//             updated,
//           );
//         }}
//       >
//         <Checkbox
//           checked={
//             formikTaxonomies?.includes(item.id || 0) ?? false
//           }
//           onCheckedChange={checked =>
//             formik.setFieldValue(
//               `${permission_key.parent_key}.${permission_key.permission_key}.taxonomies`,
//               checked
//                 ? [...(formikTaxonomies || []), item.id]
//                 : formikTaxonomies?.filter(
//                     id => id !== item.id,
//                   ),
//             )
//           }
//           className='cursor-pointer h-5 w-5'
//         />
//         <p className='text-base'>{item.name}</p>
//       </AccordionContent>
//     );
//   }
// })}

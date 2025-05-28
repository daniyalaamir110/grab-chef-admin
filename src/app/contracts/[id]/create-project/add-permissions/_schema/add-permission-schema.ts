// import * as yup from 'yup';
// import { AccessControlConstants } from '@/common/constants/project/project-permission-contants';
// import { ProjectPermissionEnum } from '@/common/types/enums/project/permission';
// import { PermissionsConfig } from '@/common/types/interfaces/project/permission';

// export const getPermissionSchema = (): yup.ObjectSchema<PermissionsConfig> => {
//   const shape: Record<string, yup.ObjectSchema<any>> = {};

//   Object.entries(AccessControlConstants).forEach(([sectionKey, section]) => {
//     const roleKey = section.key;

//     if (!shape[roleKey]) {
//       shape[roleKey] = yup.object({});
//     }

//     const permissionFields: Record<string, yup.ObjectSchema<any>> = {};

//     section.fields.forEach(field => {
//       const permissionKey =
//         ProjectPermissionEnum[
//           field.title as keyof typeof ProjectPermissionEnum
//         ];

//       if (!permissionKey || !field.inputField) return; // only add validation if inputField exists
//       permissionFields[permissionKey] = yup.object({
//         is_enabled: yup.boolean(),
//         value: yup
//           .string()
//           .when('is_enabled', (isEnabled: unknown, schema) =>
//             isEnabled === true
//               ? schema.required('Value is required when enabled')
//               : schema.nullable(),
//           ),
//       });
//     });

//     // Merge new permissions into shape[roleKey]
//     shape[roleKey] = shape[roleKey].shape(permissionFields);
//   });

//   return yup.object().shape(shape) as yup.ObjectSchema<PermissionsConfig>;
// };

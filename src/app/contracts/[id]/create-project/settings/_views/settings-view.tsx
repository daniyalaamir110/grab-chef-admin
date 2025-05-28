'use client';

import DataLoader from '@/common/components/common/data-loader';
import { ProjectAccessRoles } from '@/common/constants/project/project-constants';
import { FeatureConst } from '@/common/types/enums/project/settings';
import { ProjectFeature } from '@/common/types/interfaces/project/settings';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SwitchField from '../_components/switch-field';
import { useCreateSettings } from '../_mutations/create-settings.mutation';
import { useGetFeatures } from '../_queries/get-features.query';
import { useGetSettings } from '../_queries/get-project-settings';
import { createSettingsSchema } from '../_schema/create-settings-schema';
import BackLink from '@/common/components/common/back-link.component';

const SettingsView = () => {
  const router = useRouter();
  const params = useParams();

  // Get project features
  const { data: features, isLoading: isFeatureLoading } = useGetFeatures(
    params.id as string,
  );

  // Fetch project settings
  const { data: settings, isLoading: isSettingsLoading } = useGetSettings(
    params.id as string,
    params['project-id'] as string,
  );

  const { mutate, isPending } = useCreateSettings(
    params.id as string,
    params['project-id'] as string,
    settings?.access_rule ? true : false,
  );

  const initialValues = {
    is_visible: false,
    access_rule: 'free_access',
    features: [{}] as ProjectFeature[],
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: createSettingsSchema,
    onSubmit: values => {
      mutate(values, {
        onSuccess(data) {
          router.push(`/contracts/${params.id}/create-project/${data.id}`);
        },
      });
    },
  });

  useEffect(() => {
    if (settings?.access_rule) {
      formik.setValues({
        is_visible: settings.is_visible,
        access_rule: settings.access_rule,
        features: Object.entries(settings.features).map(([, value]) => ({
          feature_id: value.id,
          is_enabled: value.is_enabled || false,
        })),
      });
    } else {
      formik.setFieldValue(
        'features',
        Object.entries(features ?? {}).map(([, value]) => {
          return {
            feature_id: value.id,
            is_enabled: false,
          };
        }),
      );
    }
  }, [settings, features, formik]);

  return (
    <div className='center-div'>
      <div className='sm:w-4/5 w-11/12 sm:mt-16 mt-4 mb-20 p-4 space-y-6'>
        <BackLink
          href={`/contracts/${params.id}/create-project/${params['project-id'] ?? ''}`}
          text='Back'
        />
        <div>
          <p className='sm:text-3xl text-2xl font-semibold'>Project Settings</p>
          <p className='text-gray-500'>
            Configure project visibility, access rules, and additional settings
            to control how your project appears and functions.
          </p>
        </div>
        {isFeatureLoading || isSettingsLoading ? (
          <DataLoader className='h-full' />
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className='space-y-4'
          >
            {/* Project visibility tab */}
            <div>
              <p className='text-xl font-semibold'>
                Project Visibility Settings
              </p>
              <div className='rounded-xl bg-light-gray sm:p-2 p-0'>
                <SwitchField
                  field={formik.values.is_visible}
                  setField={checked =>
                    formik.setFieldValue('is_visible', checked)
                  }
                  text='Project visibility'
                  subText='Choose whether your project is On to everyone or restricted to a specific audience'
                  switchText='Visible'
                />
              </div>
              {formik.errors.is_visible && (
                <p className='text-red-500 tex-sm'>
                  {formik.errors.is_visible}
                </p>
              )}
            </div>
            {/* Access role tab */}
            <div className='space-y-4'>
              <p className='text-xl font-semibold'>Project Access Rule</p>
              <div className='rounded-xl bg-light-gray p-4'>
                {ProjectAccessRoles.map((item, index) => (
                  <div
                    key={index}
                    className='flex gap-4 sm:p-2 p-0 cursor-pointer'
                    onClick={() =>
                      formik.setFieldValue('access_rule', item.value)
                    }
                  >
                    <div
                      className={`border-2 ${item.value === formik.values.access_rule ? 'border-primary' : ''} rounded-full h-max p-1 cursor-pointer`}
                    >
                      <div
                        className={`${item.value === formik.values.access_rule ? 'bg-primary' : 'bg-white'} h-3 w-3 rounded-full`}
                      ></div>
                    </div>
                    <div>
                      <p className='text-lg font-semibold'>{item.title}</p>
                      <p className='text-gray-500'>{item.subText}</p>
                    </div>
                  </div>
                ))}
              </div>
              {formik.touched.access_rule && formik.errors.access_rule && (
                <p className='text-red-500 tex-sm'>
                  {formik.errors.access_rule}
                </p>
              )}
            </div>
            {/* Project Features */}
            <div className='space-y-4'>
              {features &&
                FeatureConst.map(item => (
                  <div
                    key={item.key}
                    className='space-y-2'
                  >
                    <p className='text-xl font-semibold'>{item.title}</p>
                    <div className='rounded-xl bg-light-gray sm:p-2 p-0 space-y-2'>
                      <SwitchField
                        field={
                          formik.values.features.find(
                            feat => feat.feature_id === features[item.key].id,
                          )?.is_enabled || false
                        }
                        setField={checked => {
                          const updatedFeatures = formik.values.features.map(
                            feat =>
                              feat.feature_id === features[item.key].id
                                ? { ...feat, is_enabled: checked }
                                : feat,
                          );
                          formik.setFieldValue('features', updatedFeatures);
                        }}
                        text={item.text}
                        subText={features[item.key].description}
                        switchText={
                          formik.values.features.find(
                            feat => feat.feature_id === features[item.key].id,
                          )?.is_enabled
                            ? 'On'
                            : 'Off'
                        }
                      />
                    </div>
                  </div>
                ))}
            </div>

            <div className='flex justify-end'>
              <div className='flex items-center gap-2'>
                <Button
                  type='button'
                  onClick={() =>
                    router.push(
                      `/contracts/${params.id}/create-project/${params['project-id'] ?? ''}`,
                    )
                  }
                  className='bg-white hover:bg-white border border-primary-hex text-primary-hex'
                >
                  Cancel
                </Button>
                <Button
                  disabled={isPending}
                  type='submit'
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SettingsView;

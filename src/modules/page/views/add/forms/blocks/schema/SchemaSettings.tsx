// disable-next-line @typescript-eslint/no-unused-vars
// @ts-nocheck
import { useState } from 'react';
import { FormikProps } from 'formik';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { KeenIcon } from '@/components';
import { schemaTypes, schemaFields } from '../../schema/schemaDefinitions';

interface SchemaSettingsProps {
  formik: FormikProps<any>;
}

function SchemaSettings({ formik }: SchemaSettingsProps) {
  type SchemaType = keyof typeof schemaFields;
  const [schemaType, setSchemaType] = useState<SchemaType | ''>(formik.values.schema?.type || '');

  const handleAddFaq = () => {
    const faq = formik.values.schema?.data?.faq || [];
    formik.setFieldValue('schema.data.faq', [...faq, { question: '', answer: '' }]);
  };

  const handleRemoveFaq = (index: number) => {
    const faq = formik.values.schema?.data?.faq || [];
    formik.setFieldValue(
      'schema.data.faq',
      faq.filter((_: any, i: number) => i !== index)
    );
  };

  const renderField = (field: any, prefix: string = 'schema.data') => {
    if (field.type === 'array') {
      return (
        <div className="space-y-4">
          <h4 className="text-sm font-medium">{field.label}</h4>
          {(formik.values.schema?.data?.[field.name] || []).map((_: any, index: number) => (
            <div key={index} className="border p-4 rounded-lg space-y-2">
              {field.fields.map((subField: any) => (
                <div key={subField.name}>
                  <label className="form-label">{subField.label}</label>
                  {subField.type === 'textarea' ? (
                    <Textarea
                      name={`${prefix}.${field.name}[${index}].${subField.name}`}
                      value={
                        formik.values.schema?.data?.[field.name]?.[index]?.[subField.name] || ''
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  ) : (
                    <Input
                      type={subField.type}
                      name={`${prefix}.${field.name}[${index}].${subField.name}`}
                      value={
                        formik.values.schema?.data?.[field.name]?.[index]?.[subField.name] || ''
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  )}
                  {formik.touched.schema?.data?.[field.name]?.[index]?.[subField.name] &&
                    formik.errors.schema?.data?.[field.name]?.[index]?.[subField.name] && (
                      <div className="text-danger text-sm">
                        {formik.errors.schema.data[field.name][index][subField.name]}
                      </div>
                    )}
                </div>
              ))}
              <Button
                type="button"
                variant="destructive"
                className="btn btn-danger mt-2"
                size="sm"
                onClick={() => handleRemoveFaq(index)}
              >
                حذف
              </Button>
            </div>
          ))}
          <Button type="button" className="btn btn-primary mt-2" onClick={handleAddFaq}>
            <KeenIcon icon="plus" className="text-white me-2" />
            <span className="text-xs">افزودن {field.label}</span>
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <label className="form-label">{field.label}</label>
          {field.type === 'textarea' ? (
            <Textarea
              name={`${prefix}.${field.name}`}
              value={formik.values.schema?.data?.[field.name] || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ) : (
            <Input
              type={field.type}
              name={`${prefix}.${field.name}`}
              value={formik.values.schema?.data?.[field.name] || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          )}
          {formik.touched.schema?.data?.[field.name] &&
            formik.errors.schema?.data?.[field.name] && (
              <div className="text-error text-sm">{formik.errors.schema.data[field.name]}</div>
            )}
        </div>
      );
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-sm">تنظیمات Schema</h3>
      </div>
      <div className="card-body space-y-5">
        <div className="flex items-center gap-1">
          <label className="form-label max-w-56">نوع Schema</label>
          <div className="grow">
            <Select
              onValueChange={(value) => {
                setSchemaType(value);
                formik.setFieldValue('schema.type', value);
                formik.setFieldValue('schema.data', {});
              }}
              value={schemaType}
            >
              <SelectTrigger>
                <SelectValue placeholder="انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                {schemaTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {schemaType && schemaFields[schemaType as SchemaType] && (
          <div className="space-y-4">
            {schemaFields[schemaType as SchemaType].map((field) => (
              <div key={field.name}>{renderField(field)}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SchemaSettings;

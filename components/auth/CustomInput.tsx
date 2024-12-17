import { FormControl, FormField, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Control, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod';

const authSchema = authFormSchema('sign-up');

const CustomInput = ({
  control,
  label,
  type,
  name,
  placeholder,
}: {
  control: Control<z.infer<typeof authSchema>>;
  label: string;
  type?: string;
  name: FieldPath<z.infer<typeof authSchema>>;
  placeholder: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col w-full gap-2">
          <FormLabel className="font-semibold text-14">{label}</FormLabel>
          <FormControl className="w-full">
            <Input
              placeholder={placeholder}
              className="w-full"
              type={type ? type : 'text'}
              {...field}
            />
          </FormControl>

          <FormMessage className="text-xs text-red-400" />
        </div>
      )}
    />
  );
};

export default CustomInput;

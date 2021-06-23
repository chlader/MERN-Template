import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

export const InputComponent = ({
    field,
    form: { touched, errors },
    width = [300 , 400, 500]
  }: {field: any, form: {touched: any, errors: any}, width: number[]}) => (
    <div>
      <FormControl isInvalid={errors.name && touched.name} w={width}>   
        <FormLabel htmlFor={field.name}>{field.name[0].toUpperCase() + field.name.slice(1, field.name.length)}</FormLabel>
        <Input {...field} id={field.name} type={field.name}  />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>
    </div>
  );
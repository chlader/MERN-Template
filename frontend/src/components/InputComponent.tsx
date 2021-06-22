import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

export const InputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  }: {field: any, form: {touched: any, errors: any}}) => (
    <FormControl isInvalid={errors.name && touched.name}>   
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input {...field} id="name" placeholder="Name" />
      <FormErrorMessage>{errors.name}</FormErrorMessage>
    </FormControl>
  );
import React from "react";
import {
  TextInput as RaTextInput,
  NumberInput as RaNumberInput,
  SelectInput as RaSelectInput,
  DateInput as RaDateInput,
  DateTimeInput as RaDateTimeInput,
  NullableBooleanInput as RaNullableBooleanInput,
  AutocompleteInput as RaAutocompleteInput,
  SelectArrayInput as RaSelectArrayInput,
  PasswordInput as RaPasswordInput,
  ReferenceInput as RaReferenceInput,
} from "react-admin";

export const convertEmptyToUndefined = (v) => (!v ? undefined : v);

const standardize = (Component) => (props) =>
  <Component {...props} fullWidth variant="outlined" size="normal" />;
const standardizeParsed = (Component) => (props) =>
  (
    <Component
      {...props}
      parse={convertEmptyToUndefined}
      defaultValue={null}
      fullWidth
      variant="outlined"
      size="normal"
    />
  );

export const TextInput = standardize(RaTextInput);
export const PasswordInput = standardize(RaPasswordInput);
export const NumberInput = standardize(RaNumberInput);
export const SelectInput = standardizeParsed(RaSelectInput);
export const SelectArrayInput = standardize(RaSelectArrayInput);
export const DateInput = standardize(RaDateInput);
export const DateTimeInput = standardize(RaDateTimeInput);
export const NullableBooleanInput = standardize(RaNullableBooleanInput);
export const AutocompleteInput = standardize(RaAutocompleteInput);
export const ReferenceInput = RaReferenceInput;

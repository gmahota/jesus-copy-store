import {useForm, FormProvider} from "react-hook-form";
import SectionTitle from "components/section-title";
import Widget from "components/widget";
import {InputWrapper} from "components/react-hook-form/input-wrapper";
import {Label} from "components/react-hook-form/label";
import {ErrorMessage} from "components/react-hook-form/error-message";
import {Input} from "components/react-hook-form/input";
import {NumericInput} from "components/react-hook-form/numeric-input";
import {Textarea} from "components/react-hook-form/textarea";
import {Select} from "components/react-hook-form/select";
import {Switch} from "components/react-hook-form/switch";
import {Checkbox} from "components/react-hook-form/checkbox";
import {Radio} from "components/react-hook-form/radio";
import {ReactSelect} from "components/react-hook-form/react-select";

export type FormProps = {
  name: string;
  email: string;
  password: string;
  number: string | number;
  custom: string | number;
  pattern: string;
  textarea: string;
  select: string;
  reactSelect: string;
  reactSelectMulti: string;
  switch: boolean;
  checkbox: boolean;
  radio: string;
};

const Index: React.FC = () => {
  const methods = useForm<FormProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      number: "",
      custom: "",
      pattern: "",
      textarea: "",
      select: "",
      reactSelect: "",
      reactSelectMulti: "",
      switch: false,
      checkbox: false,
      radio: "",
    },
  });
  const {
    handleSubmit,
    reset,
    formState: {errors},
  } = methods;

  const onSubmit = (data: FormProps) => {
    //eslint-disable-next-line
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <SectionTitle title="Forms" subtitle="Validation" />
      <Widget
        title="Form validation"
        description={<span>Sample form components with validation</span>}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-12">
                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    rules={{required: "Name is required"}}
                  />
                  {errors?.name?.message && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    rules={{required: "Please enter a valid email"}}
                  />
                  {errors?.email?.message && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="name">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "Password should have at least 4 characters",
                      },
                      maxLength: {
                        value: 8,
                        message:
                          "Password should have no more than 8 characters",
                      },
                    }}
                  />
                  {errors?.password?.message && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="number">Number</Label>
                  <NumericInput
                    id="number"
                    name="number"
                    step={1}
                    rules={{
                      required: "This is required",
                      min: {
                        value: 13,
                        message: "You must be 13 or older to create an account",
                      },
                      max: {
                        value: 65,
                        message:
                          "You must be 65 or younger to create an account",
                      },
                    }}
                  />
                  {errors?.number?.message && (
                    <ErrorMessage>{errors.number.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="custom">Custom validation</Label>
                  <Input
                    id="custom"
                    name="custom"
                    type="text"
                    placeholder="Type earth"
                    rules={{
                      required: "Input should be equal to earth",
                      validate: (value: string | number): boolean | string =>
                        value === "earth" ||
                        "Only users from earth can create an account",
                    }}
                  />
                  {errors?.custom?.message && (
                    <ErrorMessage>{errors.custom.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="pattern">Pattern</Label>
                  <Input
                    id="pattern"
                    name="pattern"
                    type="text"
                    placeholder="###-###-####"
                    rules={{
                      required: "Phone number is required",
                      pattern: {
                        value:
                          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                        message: "Please enter a valid phone number",
                      },
                    }}
                  />
                  {errors?.pattern?.message && (
                    <ErrorMessage>{errors.pattern.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="textarea">Textarea</Label>
                  <Textarea
                    id="textarea"
                    name="textarea"
                    rules={{required: "This is required"}}
                  />
                  {errors?.textarea?.message && (
                    <ErrorMessage>{errors.textarea.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="select">Select</Label>
                  <Select
                    id="select"
                    name="select"
                    rules={{required: "This is required"}}
                    options={[
                      {key: "usa", value: "USA"},
                      {key: "canada", value: "Canada"},
                      {key: "australia", value: "Australia"},
                    ]}
                  />
                  {errors?.select?.message && (
                    <ErrorMessage>{errors.select.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="react-select">React Select</Label>
                  <ReactSelect
                    id="react-select"
                    name="reactSelect"
                    rules={{required: "This is required"}}
                    options={[
                      {value: "usa", label: "USA"},
                      {value: "canada", label: "Canada"},
                      {value: "australia", label: "Australia"},
                    ]}
                  />
                  {errors?.reactSelect?.message && (
                    <ErrorMessage>{errors.reactSelect.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="react-select-multi">React Select Multi</Label>
                  <ReactSelect
                    id="react-select-multi"
                    name="reactSelectMulti"
                    isMulti={true}
                    rules={{required: "This is required"}}
                    options={[
                      {value: "usa", label: "USA"},
                      {value: "canada", label: "Canada"},
                      {value: "australia", label: "Australia"},
                    ]}
                  />
                  {errors?.reactSelectMulti?.message && (
                    <ErrorMessage>
                      {errors.reactSelectMulti.message}
                    </ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="switch">Switch</Label>
                  <Switch
                    id="switch"
                    name="switch"
                    rules={{required: "This is required"}}
                  />
                  {errors?.switch?.message && (
                    <ErrorMessage>{errors.switch.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="checkbox">Checkbox</Label>
                  <Checkbox
                    id="checkbox"
                    name="checkbox"
                    label="Checkbox"
                    rules={{required: "This is required"}}
                  />
                  {errors?.checkbox?.message && (
                    <ErrorMessage>{errors.checkbox.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-4">
                  <Label id="radio">Radio</Label>
                  <Radio
                    name="radio"
                    rules={{required: "This is required"}}
                    options={[
                      {key: "male", value: "Male"},
                      {key: "female", value: "Female"},
                    ]}
                  />
                  {errors?.radio?.message && (
                    <ErrorMessage>{errors.radio.message}</ErrorMessage>
                  )}
                </InputWrapper>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  reset();
                }}
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center px-3 py-2 ml-3 text-sm font-medium text-white bg-blue-500 border border-transparent shadow-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </Widget>
    </>
  );
};
export default Index;

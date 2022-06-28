import {useForm, FormProvider} from "react-hook-form";
import {InputWrapper} from "components/react-hook-form/input-wrapper";
import {Label} from "components/react-hook-form/label";
import {ErrorMessage} from "components/react-hook-form/error-message";
import {Input} from "components/react-hook-form/input";
import {Select} from "components/react-hook-form/select";

export type FormProps = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  position: string;
  language: string;
};

const Index: React.FC = () => {
  const methods = useForm<FormProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      position: "",
      language: "",
    },
  });
  const {
    handleSubmit,
    reset,
    formState: {errors},
  } = methods;

  const onSubmit = async (data: FormProps) => {
    //eslint-disable-next-line
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <div className="grid grid-cols-1 gap-y-2 gap-x-2 sm:grid-cols-12">
            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="first-name">First name</Label>
              <Input
                id="first-name"
                name="firstName"
                type="text"
                rules={{required: "First name is required"}}
              />
              {errors?.firstName?.message && (
                <ErrorMessage>{errors.firstName.message}</ErrorMessage>
              )}
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="last-name">Last name</Label>
              <Input
                id="last-name"
                name="lastName"
                type="text"
                rules={{required: "Last name is required"}}
              />
              {errors?.lastName?.message && (
                <ErrorMessage>{errors.lastName.message}</ErrorMessage>
              )}
            </InputWrapper>

            <br className="sm:col-span-12" />

            <InputWrapper outerClassName="sm:col-span-12">
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

            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                rules={{required: "Company is required"}}
              />
              {errors?.company?.message && (
                <ErrorMessage>{errors.company.message}</ErrorMessage>
              )}
            </InputWrapper>

            <br className="sm:col-span-12" />

            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="position">Position</Label>
              <Input
                id="position"
                name="position"
                type="text"
                rules={{required: "Position is required"}}
              />
              {errors?.position?.message && (
                <ErrorMessage>{errors.position.message}</ErrorMessage>
              )}
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="language">Language</Label>
              <Select
                id="language"
                name="language"
                rules={{required: "Language is required"}}
                options={[
                  {key: "english", value: "English"},
                  {key: "spanish", value: "Spanish"},
                  {key: "portuguese", value: "Portuguese"},
                ]}
              />
              {errors?.language?.message && (
                <ErrorMessage>{errors.language.message}</ErrorMessage>
              )}
            </InputWrapper>
          </div>
        </div>

        <div className="flex justify-start space-x-2">
          <button
            onClick={() => {
              reset();
            }}
            type="button"
            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:border-gray-700 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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
  );
};
export default Index;

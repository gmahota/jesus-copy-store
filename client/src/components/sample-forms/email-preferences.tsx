import {useForm, FormProvider} from "react-hook-form";
import {InputWrapper} from "components/react-hook-form/input-wrapper";
import {Label} from "components/react-hook-form/label";
import {ErrorMessage} from "components/react-hook-form/error-message";
import {Input} from "components/react-hook-form/input";
import {Select} from "components/react-hook-form/select";
import {Radio} from "components/react-hook-form/radio";

export type FormProps = {
  currentEmail: string;
  newEmail: string;
  language: string;
  dailyUpdates: string;
  weeklyUpdates: string;
};

const Index: React.FC = () => {
  const methods = useForm<FormProps>({
    defaultValues: {
      currentEmail: "",
      newEmail: "",
      language: "",
      dailyUpdates: "",
      weeklyUpdates: "",
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="current-email">Current email</Label>
              <Input
                id="current-email"
                name="currentEmail"
                type="email"
                rules={{required: "Please enter a valid email"}}
              />
              {errors?.currentEmail?.message && (
                <ErrorMessage>{errors.currentEmail.message}</ErrorMessage>
              )}
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="new-email">New email</Label>
              <Input
                id="new-email"
                name="newEmail"
                type="email"
                rules={{required: "Please enter a valid email"}}
              />
              {errors?.newEmail?.message && (
                <ErrorMessage>{errors.newEmail.message}</ErrorMessage>
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

            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="daily-updates">Daily updates</Label>
              <Radio
                name="dailyUpdates"
                rules={{required: "This is required"}}
                options={[
                  {key: "yes", value: "Yes"},
                  {key: "no", value: "No"},
                ]}
              />
              {errors?.dailyUpdates?.message && (
                <ErrorMessage>{errors.dailyUpdates.message}</ErrorMessage>
              )}
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="weekly-updates">Weekly updates</Label>
              <Radio
                name="weeklyUpdates"
                rules={{required: "This is required"}}
                options={[
                  {key: "yes", value: "Yes"},
                  {key: "no", value: "No"},
                ]}
              />
              {errors?.weeklyUpdates?.message && (
                <ErrorMessage>{errors.weeklyUpdates.message}</ErrorMessage>
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

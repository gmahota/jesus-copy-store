import SectionTitle from "components/section-title";
import Widget from "components/widget";
import {InputWrapper} from "components/forms/input-wrapper";
import {Label} from "components/forms/label";
import {ErrorMessage} from "components/forms/error-message";
import {SuccessMessage} from "components/forms/success-message";
import {Hint} from "components/forms/hint";
import {Input} from "components/forms/input";
import {Textarea} from "components/forms/textarea";
import {Select} from "components/forms/select";
import {Checkbox} from "components/forms/checkbox";
import {Radio} from "components/forms/radio";

const Index: React.FC = () => (
  <>
    <SectionTitle title="Forms" subtitle="Inputs" />

    <Widget title="Regular" description={<span>Text inputs</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Input name="name" type="text" />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Input name="name" type="text" />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Input name="name" type="text" />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>

    <Widget title="Inline" description={<span>Inline text inputs</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Input name="name" type="text" width="w-64" />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Input name="name" type="text" width="w-64" />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Input name="name" type="text" width="w-64" />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>
    <Widget title="Regular" description={<span>Textareas</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Textarea name="name" />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Textarea name="name" />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Textarea name="name" />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>

    <Widget title="Inline" description={<span>Inline textareas</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Textarea name="name" width="w-64" />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Textarea name="name" width="w-64" />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Textarea name="name" width="w-64" />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>

    <Widget title="Selects" description={<span>Select inputs</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Select
              name="select"
              options={[
                {key: "usa", value: "USA"},
                {key: "canada", value: "Canada"},
                {key: "australia", value: "Australia"},
              ]}
            />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Select
              name="select"
              options={[
                {key: "usa", value: "USA"},
                {key: "canada", value: "Canada"},
                {key: "australia", value: "Australia"},
              ]}
            />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Select
              name="select"
              options={[
                {key: "usa", value: "USA"},
                {key: "canada", value: "Canada"},
                {key: "australia", value: "Australia"},
              ]}
            />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>

    <Widget
      title="Inline Selects"
      description={<span>Inline select inputs</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Select
              width="w-48"
              name="select"
              options={[
                {key: "usa", value: "USA"},
                {key: "canada", value: "Canada"},
                {key: "australia", value: "Australia"},
              ]}
            />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Select
              width="w-48"
              name="select"
              options={[
                {key: "usa", value: "USA"},
                {key: "canada", value: "Canada"},
                {key: "australia", value: "Australia"},
              ]}
            />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper inline={true} outerClassName="sm:col-span-12">
            <Label>Label</Label>
            <Select
              width="w-48"
              name="select"
              options={[
                {key: "usa", value: "USA"},
                {key: "canada", value: "Canada"},
                {key: "australia", value: "Australia"},
              ]}
            />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>

    <Widget title="Radios" description={<span>Default components</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Radio
              name="radio"
              options={[
                {key: "male", value: "Male"},
                {key: "female", value: "Female"},
              ]}
            />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Radio
              name="radio"
              options={[
                {key: "male", value: "Male"},
                {key: "female", value: "Female"},
              ]}
            />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Radio
              name="radio"
              options={[
                {key: "male", value: "Male"},
                {key: "female", value: "Female"},
              ]}
            />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>

    <Widget
      title="Inline radios"
      description={<span>Inline radio inputs</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Radio
              inline={true}
              name="radio"
              options={[
                {key: "male", value: "Male"},
                {key: "female", value: "Female"},
              ]}
            />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Radio
              inline={true}
              name="radio"
              options={[
                {key: "male", value: "Male"},
                {key: "female", value: "Female"},
              ]}
            />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Radio
              inline={true}
              name="radio"
              options={[
                {key: "male", value: "Male"},
                {key: "female", value: "Female"},
              ]}
            />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>

    <Widget title="Checkboxes" description={<span>Default components</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Checkbox name="checkbox-1" label="Checkbox 1" />
            <Checkbox name="checkbox-2" label="Checkbox 2" />
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Checkbox name="checkbox-1" label="Checkbox 1" />
            <Checkbox name="checkbox-2" label="Checkbox 2" />
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <Checkbox name="checkbox-1" label="Checkbox 1" />
            <Checkbox name="checkbox-2" label="Checkbox 2" />
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>

    <Widget
      title="Inline checkboxes"
      description={<span>Inline checkbox inputs</span>}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <div className="flex flex-row items-center justify-start space-x-2">
              <Checkbox name="checkbox-1" label="Checkbox 1" />
              <Checkbox name="checkbox-2" label="Checkbox 2" />
            </div>
            <Hint>This is a hint</Hint>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <div className="flex flex-row items-center justify-start space-x-2">
              <Checkbox name="checkbox-1" label="Checkbox 1" />
              <Checkbox name="checkbox-2" label="Checkbox 2" />
            </div>
            <ErrorMessage>This is required</ErrorMessage>
          </InputWrapper>
          <InputWrapper outerClassName="sm:col-span-4">
            <Label>Label</Label>
            <div className="flex flex-row items-center justify-start space-x-2">
              <Checkbox name="checkbox-1" label="Checkbox 1" />
              <Checkbox name="checkbox-2" label="Checkbox 2" />
            </div>
            <SuccessMessage>This is a message</SuccessMessage>
          </InputWrapper>
        </div>
      </div>
    </Widget>
  </>
);
export default Index;

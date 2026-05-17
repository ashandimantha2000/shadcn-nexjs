"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function CreatePost() {
  const [form, setForm] = React.useState({
    title: "",
    description: "",
  });
  const [checked, setChecked] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState("card")
  return (
    <Card className="w-full sm:max-w-md absolute">
      <CardHeader>
        <CardTitle>Post Your Code for Review </CardTitle>
        {/* <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription> */}
      </CardHeader>

      <CardContent>
        <form id="form-rhf-demo">
          <FieldGroup>
            {/* project title */}
            <Field>
              <FieldLabel htmlFor="form-rhf-demo-title">
                Project Title
              </FieldLabel>

              <Input
                id="form-rhf-demo-title"
                placeholder="React useState"
                autoComplete="off"
                value={form.title}
              />
            </Field>
            {/* What do you need reviewed?  */}
            <Field>
              <FieldLabel htmlFor="form-rhf-demo-title">
                What do you need reviewed? 
              </FieldLabel>

              <Input
                id="form-rhf-demo-title"
                placeholder="React useState"
                autoComplete="off"
                value={form.title}
              />
            </Field>
            {/* GitHub Repository URL (Optional) */}
            <Field>
              <FieldLabel htmlFor="form-rhf-demo-title">
                GitHub Repository URL (Optional)
              </FieldLabel>

              <Input
                id="form-rhf-demo-title"
                placeholder="www.github.com"
                autoComplete="off"
                value={form.title}
              />
            </Field>
            {/* tech stach */}
            <Field orientation="horizontal">
              <FieldLabel htmlFor="form-rhf-demo-title">
                Tech Stack (select multiple)
              </FieldLabel>
              <br />
              <Checkbox
                id="terms-checkbox-2"
                name="terms-checkbox-2"
                defaultChecked
              />

              <FieldContent>
                <FieldLabel htmlFor="terms-checkbox-2">JavaScrpt</FieldLabel>
              </FieldContent>
              <Checkbox
                id="terms-checkbox-2"
                name="terms-checkbox-2"
                defaultChecked
              />
              <FieldContent>
                <FieldLabel htmlFor="terms-checkbox-2">React</FieldLabel>
              </FieldContent>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Reset
          </Button>

          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}

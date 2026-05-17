"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
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
    github: "",
  });

  const [reviewType, setReviewType] =
    React.useState("Code Quality");

  const [techStack, setTechStack] = React.useState([]);

  const technologies = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleTech = (tech) => {
    setTechStack((prev) =>
      prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...form,
      reviewType,
      techStack,
    });
  };

  const handleReset = () => {
    setForm({
      title: "",
      github: "",
    });

    setReviewType("quality");
    setTechStack([]);
  };

  return (
    <Card className="w-full max-w-lg mx-auto absolute">
      <CardHeader>
        <CardTitle>
          Post Your Code for Review
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form id="review-form" onSubmit={handleSubmit}>
          <FieldGroup className="space-y-5">

            {/* Project Title */}
            <Field>
              <FieldLabel htmlFor="title">
                Project Title
              </FieldLabel>

              <Input
                id="title"
                name="title"
                placeholder="React useState Example"
                value={form.title}
                onChange={handleChange}
              />
            </Field>

            {/* Review Type */}
            <Field>
              <FieldLabel>
                What do you need reviewed?
              </FieldLabel>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {reviewType}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>
                      Select Review Type
                    </DropdownMenuLabel>

                    <DropdownMenuRadioGroup
                      value={reviewType}
                      onValueChange={setReviewType}
                    >
                      <DropdownMenuRadioItem value="quality">
                        Code Quality
                      </DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="best-practices">
                        Best Practices
                      </DropdownMenuRadioItem>

                      <DropdownMenuRadioItem value="performance">
                        Performance
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </Field>

            {/* GitHub URL */}
            <Field>
              <FieldLabel htmlFor="github">
                GitHub Repository URL (Optional)
              </FieldLabel>

              <Input
                id="github"
                name="github"
                placeholder="https://github.com/user/repo"
                value={form.github}
                onChange={handleChange}
              />
            </Field>

            {/* Tech Stack */}
            <Field>
              <FieldLabel>
                Tech Stack
              </FieldLabel>

              <div className="grid grid-cols-2 gap-3 mt-2">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2"
                  >
                    <Checkbox
                      id={tech}
                      checked={techStack.includes(tech)}
                      onCheckedChange={() =>
                        toggleTech(tech)
                      }
                    />

                    <label htmlFor={tech}>
                      {tech}
                    </label>
                  </div>
                ))}
              </div>
            </Field>

          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={handleReset}
        >
          Reset
        </Button>

        <Button
          type="submit"
          form="review-form"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
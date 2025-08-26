"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FormHeader from "@/app/components/dashboard/FormHeader";
import TextInput from "@/app/components/forminputs/TextInput";

const NewCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Category" href="#" />

      {/* Form */}
      <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-[#1F1F1F] rounded-2xl shadow-lg border border-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
            placeholder="Type the Category title"
          />

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-black bg-[#C5E1A5] rounded-xl shadow-md hover:shadow-lg hover:bg-[#b7d48f] focus:outline-none focus:ring-4 focus:ring-[#C5E1A5]/50 transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;

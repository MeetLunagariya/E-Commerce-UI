import Billing_Info from "./billing_info/Billing_Info";
import Order_Summary from "./order_summary/Order_Summary";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import Successful from "./Successful";

const schema = yup.object({
  firstname: yup
    .string()
    .trim()
    .required("First Name is required")
    .min(4, "Name must be at least 4 characters"),
  lastname: yup
    .string()
    .trim()
    .required("Last Name is required")
    .min(4, "Name must be at least 4 characters"),
  company_name: yup.string(),
  address_1: yup
    .string()
    .trim()
    .required("Address is required")
    .min(4, "Adress must be at least 4 characters"),
  // address_2: yup
  //   .string()
  //   .trim()
  //   .required("Address is required")
  //   .min(4, "Adress must be at least 4 characters"),
  country: yup.string().trim().required("country is required"),
  city: yup.string().trim().required("City is required"),
  state: yup.string().trim().required("State is required"),
  zip: yup
    .string()
    .trim()
    .required("Zip Code is required")
    .matches(/^\d+$/, "Zip Code must be numeric"),
    // .min(4, "Zip Code must be at least 4 numbers")
    // .max(6, "Zip Code must be at most 6 numbers"),
  email: yup
    .string()
    .email("Invalid email format"),
    // .required("Email is required"),
  phone_number: yup
    .string()
    .trim(),
    // .required("Phone Number is required")
    // .matches(/^\d+$/, "Phone Number must be numeric"),
  isDifferentAddress: yup.boolean(),
});

const Checkout = () => {
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isOrderPlaced, setisOrderPlaced] = useState(false);
  console.log(errors)
  function submit(data) {
    reset(data);
    setisOrderPlaced(true);
  }

  useEffect(() => {
    if (isOrderPlaced) {
      setTimeout(() => {
        const element = document.getElementById("target-event");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure rendering
    }
  }, [isOrderPlaced]);

  return (
    <div className="container ">
      {isOrderPlaced ? (
        <>
          <section
            className="min-h-[524px] flex justify-center items-center"
            id="target-event"
          >
            <Successful />
          </section>
        </>
      ) : (
        <>
          <form className="" onSubmit={handleSubmit(submit)}>
            <div className="grid grid-cols-4 px-3 py-10 gap-4">
              <Billing_Info
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
              />
              <Order_Summary />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;

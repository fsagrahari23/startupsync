import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";

const KycForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      address: "",
      contact: "",
      email: "",
      legalBusinessName: "",
      businessAddress: "",
      dateOfIncorporation: "",
      totalEmployees: "",
      gstNumber: "",
      taxInformationNumber: "",
      websiteUrl: "",
      socialMediaLinks: "",
      pitchingValueEquity: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company Name is required"),
      address: Yup.string().required("Address is required"),
      contact: Yup.string().required("Contact is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      legalBusinessName: Yup.string().required(
        "Legal Business Name is required"
      ),
      businessAddress: Yup.string().required("Business Address is required"),
      dateOfIncorporation: Yup.date().required(
        "Date of Incorporation is required"
      ),
      totalEmployees: Yup.number()
        .required("Total Employees is required")
        .positive()
        .integer(),
      gstNumber: Yup.string().required("GST Number is required"),
      taxInformationNumber: Yup.string().required(
        "Tax Information Number is required"
      ),
      websiteUrl: Yup.string()
        .url("Invalid URL format")
        .required("Website URL is required"),
      socialMediaLinks: Yup.string(),
      pitchingValueEquity: Yup.string(),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 max-w-lg mx-auto bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">KYC Form</h2>

      {/* Company Name */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          name="companyName"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.companyName && formik.errors.companyName
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.companyName && formik.errors.companyName && (
          <div className="text-red-500 text-sm">
            {formik.errors.companyName}
          </div>
        )}
      </div>

      {/* Address */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.address && formik.errors.address
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.address && formik.errors.address && (
          <div className="text-red-500 text-sm">{formik.errors.address}</div>
        )}
      </div>

      {/* Contact */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Contact
        </label>
        <input
          name="contact"
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.contact && formik.errors.contact
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.contact && formik.errors.contact && (
          <div className="text-red-500 text-sm">{formik.errors.contact}</div>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}
      </div>

      {/* Legal Business Name */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Legal Business Name
        </label>
        <input
          name="legalBusinessName"
          value={formik.values.legalBusinessName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.legalBusinessName && formik.errors.legalBusinessName
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.legalBusinessName &&
          formik.errors.legalBusinessName && (
            <div className="text-red-500 text-sm">
              {formik.errors.legalBusinessName}
            </div>
          )}
      </div>

      {/* Business Address */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Business Address
        </label>
        <input
          name="businessAddress"
          value={formik.values.businessAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.businessAddress && formik.errors.businessAddress
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.businessAddress && formik.errors.businessAddress && (
          <div className="text-red-500 text-sm">
            {formik.errors.businessAddress}
          </div>
        )}
      </div>

      {/* Date of Incorporation */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Date of Incorporation
        </label>
        <input
          name="dateOfIncorporation"
          type="date"
          value={formik.values.dateOfIncorporation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.dateOfIncorporation &&
            formik.errors.dateOfIncorporation
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.dateOfIncorporation &&
          formik.errors.dateOfIncorporation && (
            <div className="text-red-500 text-sm">
              {formik.errors.dateOfIncorporation}
            </div>
          )}
      </div>

      {/* Total Employees */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Total Employees
        </label>
        <input
          name="totalEmployees"
          type="number"
          value={formik.values.totalEmployees}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.totalEmployees && formik.errors.totalEmployees
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.totalEmployees && formik.errors.totalEmployees && (
          <div className="text-red-500 text-sm">
            {formik.errors.totalEmployees}
          </div>
        )}
      </div>

      {/* GST Number */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          GST Number
        </label>
        <input
          name="gstNumber"
          value={formik.values.gstNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.gstNumber && formik.errors.gstNumber
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.gstNumber && formik.errors.gstNumber && (
          <div className="text-red-500 text-sm">{formik.errors.gstNumber}</div>
        )}
      </div>

      {/* Tax Information Number */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Tax Information Number
        </label>
        <input
          name="taxInformationNumber"
          value={formik.values.taxInformationNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.taxInformationNumber &&
            formik.errors.taxInformationNumber
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.taxInformationNumber &&
          formik.errors.taxInformationNumber && (
            <div className="text-red-500 text-sm">
              {formik.errors.taxInformationNumber}
            </div>
          )}
      </div>

      {/* Website URL */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Website URL
        </label>
        <input
          name="websiteUrl"
          value={formik.values.websiteUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.websiteUrl && formik.errors.websiteUrl
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
        {formik.touched.websiteUrl && formik.errors.websiteUrl && (
          <div className="text-red-500 text-sm">{formik.errors.websiteUrl}</div>
        )}
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Social Media Links
        </label>
        <input
          name="socialMediaLinks"
          value={formik.values.socialMediaLinks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.socialMediaLinks && formik.errors.socialMediaLinks
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.socialMediaLinks && formik.errors.socialMediaLinks && (
          <div className="text-red-500 text-sm">
            {formik.errors.socialMediaLinks}
          </div>
        )}
      </div>

      {/* Pitching Value Equity */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Pitching Value Equity
        </label>
        <input
          name="pitchingValueEquity"
          value={formik.values.pitchingValueEquity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
            formik.touched.pitchingValueEquity &&
            formik.errors.pitchingValueEquity
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.pitchingValueEquity &&
          formik.errors.pitchingValueEquity && (
            <div className="text-red-500 text-sm">
              {formik.errors.pitchingValueEquity}
            </div>
          )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default KycForm;

"use client";
import React from "react";
import { handleForgotPassword } from "../../../authentication/handleAuth";
import { errorNoti, successNoti } from "@utils/notification/notification";
const ForgotPassword = () => {
  const onSubmit = async (formData) => {
    try {
      const res = await handleForgotPassword(formData);
      successNoti(res.message);
    } catch (e) {
      errorNoti(e.message);
    }
  };
  return (
    <div className="page-forget-password">
      <form action={onSubmit} className="reset-password">
        <p>
          Lost your password? Please enter your username or email address. You will receive a link
          to create a new password via email.
        </p>
        <p className="form-row form-row-first">
          <label>Username or email</label>
          <input className="input-text" type="text" name="user_login" autoComplete="username" />
        </p>
        <div className="clear"></div>
        <p className="form-row">
          <button type="submit" className="button">
            Reset password
          </button>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;

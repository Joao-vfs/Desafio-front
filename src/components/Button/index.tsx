"use client";

import React from "react";

import { IButtonProps } from "@/interfaces/IButton.interface";

import ButtonComponent from "./Button.component";

export function Button({ children, ...props }: Readonly<IButtonProps>) {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}

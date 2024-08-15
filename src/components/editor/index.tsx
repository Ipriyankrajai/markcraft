"use client";
import React, { useState } from "react";
import Editor from "./advanced-editor";
import { JSONContent } from "novel";
import { defaultValue } from "./default-values";

const AdvanceEditor = () => {
  const [value, setValue] = useState<JSONContent>(defaultValue);
  return <Editor initialValue={value} onChange={setValue} />;
};

export default AdvanceEditor;

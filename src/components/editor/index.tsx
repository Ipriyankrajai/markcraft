"use client";
import React, { useState } from "react";
import { JSONContent } from "novel";
import { defaultValue } from "./default-values";
import AdvancedEditor from "./advanced-editor";

const Editor = () => {
  const [value, setValue] = useState<JSONContent>(defaultValue);
  return <AdvancedEditor initialValue={value} onChange={setValue} />;
};

export default Editor;

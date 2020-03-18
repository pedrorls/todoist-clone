import React from "react";
import { firebase } from "../firebase";

export const Checkbox = id => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(id)
      .update({
        archive: true
      });
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkboc-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};

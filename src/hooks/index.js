import React, { useState, useEffect } from "react";
import moment from "moment";
import firebase from "../firebase";
import { collatedTasksExists } from "../helpers";
import { all } from "q";

export const useTask = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "iWzL4IS56l3P8J3Zj9pFKhxf9DThCm");

    unsubscribe =
      selectedProject && !collatedTasksExists(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              task =>
                moment(task.date, "DD/MM/YYYY").diff(moment(), "days") <= 7 &&
                !task.archived
            )
          : newTasks.filter(task => task.archived !== true)
      );

      setArchivedTasks(newTasks.filter(task => task.archived));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { task, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", "iWzL4IS56l3P8J3Zj9pFKhxf9DThCm")
      .orderBy("projectId")
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: projectId
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects))
          setProjects(allProjects);
      });
  }, [input]);

  return { projects, setProjects };
};

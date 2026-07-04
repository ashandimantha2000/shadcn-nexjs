export const createTask = async () => {
  await fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify({
      title: "Learn Backend",
    }),
  });
};
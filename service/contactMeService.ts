/* eslint-disable @typescript-eslint/no-explicit-any */
export const sendMessageToMe = async (data: any) => {
  return await fetch("/api/contactUs", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      contentType: "application/json",
    },
  });
};

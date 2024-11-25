import { ReserveRequestType, ReserveResponseType } from "@/types/Reserve";

export const reserveTable = async (reserveData: ReserveRequestType, userToken: string): Promise<ReserveResponseType> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/reservas`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify(reserveData)
  })
    .then(async response => {
        console.log(response)
      if (!response.ok) {
        throw new Error('Failed to reserve table');
      }
      return await response.json();
    })
    .then(data => {
        console.log(data)
      return data;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      throw error;
    });
}
import { db } from "../firebase"
import { ref, set } from "firebase/database"

export const addGuestToDb = async (guest) => {
  try {
    await set(ref(db, `guestlist/${guest.id}`), {
      id: Number(guest.id),
      name: guest.name,
      label: guest.label,
      group: Boolean(guest.group),
      submitted: Boolean(true),
    })
  } catch (e) {
    console.error("Error adding guest: ", e)
  }
}

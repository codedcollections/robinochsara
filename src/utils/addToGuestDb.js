import { db } from "../firebase"
import { ref, set, update } from "firebase/database"

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

export const AllowSecondAnswer = async (id) => {
  try {
    await update(ref(db, `guestlist/${id}`), {
      submitted: false,
    })
  } catch (e) {
    console.error("Error updating guest: ", e)
  }
}

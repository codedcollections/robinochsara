import { db } from "../firebase"
import { ref, set, update, remove, get } from "firebase/database"

export const addGuestToDb = async (guest) => {
  try {
    await set(ref(db, `guestlist/${String(guest.id)}`), {
      id: Number(guest.id),
      name: guest.name,
      label: guest.label,
      group: Boolean(guest.group),
      submitted: Boolean(guest.submitted),
    })
  } catch (e) {
    console.error("Error adding guest: ", e)
  }
}

export const updateGuestDb = async (id, updatedFields) => {
  try {
    // Remove undefined fields to prevent overwriting
    const filteredFields = Object.fromEntries(
      Object.entries(updatedFields).filter(
        ([k, v]) => v !== undefined && v !== "",
      ),
    )
    if (Object.keys(filteredFields).length === 0) return
    await update(ref(db, `guestlist/${String(id)}`), filteredFields)
  } catch (e) {
    console.error("Error updating guest:", e)
  }
}

export const AllowSecondAnswer = async (id) => {
  try {
    await update(ref(db, `guestlist/${String(id)}`), {
      submitted: false,
    })
  } catch (e) {
    console.error("Error updating guest: ", e)
  }
}

export const deleteFromGuestDb = async (id) => {
  try {
    await remove(ref(db, `guestlist/${String(id)}`))
  } catch (e) {
    console.error("Error deleting guest:", e)
  }
}

export const getGuestById = async (id) => {
  try {
    const snapshot = await get(ref(db, `guestlist/${String(id)}`))
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      return null
    }
  } catch (err) {
    console.error("Error fetching guest by id:", err)
    return null
  }
}

export async function deleteFromRsvpDb(id) {
  try {
    await remove(ref(db, `rsvps/${String(id)}`))
  } catch (error) {
    console.error("Error deleting RSVP:", error)
  }
}

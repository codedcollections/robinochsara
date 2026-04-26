import { db } from "./firebase"
import { ref, push, set, serverTimestamp } from "firebase/database"
import { onValue } from "firebase/database"

export async function sendSpeeches(speechData = {}) {
  const speechRef = ref(db, "speeches")
  const newSpeech = push(speechRef)
  await set(newSpeech, {
    ...speechData,
    createdAt: serverTimestamp(),
  })
}

export function onSpeeches(key, setter) {
  const speechRef = ref(db, "speeches")

  const unsubscribe = onValue(speechRef, (snapshot) => {
    const speeches = snapshot.val()
    if (!speeches) return setter([])
    setter(Object.values(speeches))
  })

  return unsubscribe
}

//rsvp

export async function sendRsvps(rsvpData = {}) {
  const rsvpRef = ref(db, "rsvps")
  const newRsvp = push(rsvpRef)
  await set(newRsvp, {
    ...rsvpData,
    createdAt: serverTimestamp(),
  })
}

export function onRsvps(key, setter) {
  const rsvpRef = ref(db, "rsvps")

  const unsubscribe = onValue(rsvpRef, (snapshot) => {
    const rsvps = snapshot.val()
    if (!rsvps) return setter([])
    setter(Object.values(rsvps))
  })

  return unsubscribe
}

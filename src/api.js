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

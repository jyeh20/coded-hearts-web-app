import firebase from './firebase'

const db = firebase.firestore()
const emailsRef = db.collection("emails")
const performancesRef = db.collection("performances").orderBy("date")

const writeNewEmail = (name, address, message) => {
  emailsRef.add({
    name: name,
    email: address,
    message: message
  })
}

const getPerformances = () => {
  return performancesRef.get()
}


const firebaseFunctions = {
  writeNewEmail,
  getPerformances,
}

export default firebaseFunctions
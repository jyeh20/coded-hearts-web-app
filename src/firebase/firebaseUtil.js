import firebase from 'firebase'

const db = firebase.firestore()
const dataRef = db.collection("data")
const emailsRef = db.collection("emails")
const performancesRef = db.collection("performances")
const staticRef = db.collection("static")

const getHeaderDataRef = () => {
  return dataRef.doc("Header")
}

const getFooterDataRef = () => {
  return dataRef.doc("Footer")
}

const writeNewEmail = (name, address, message) => {
  emailsRef.set({
    name: name,
    email: address,
    message: message
  })
}

const getPerformances = () => {
  return performancesRef.get()
}

const getAbout = () => {
  staticRef.doc("about")
  .get().then((doc) => {
    return doc.data().message
  })
}


const firebaseFunctions = {
  getHeaderDataRef,
  getFooterDataRef,
  writeNewEmail,
  getPerformances,
  getAbout
}

export default firebaseFunctions
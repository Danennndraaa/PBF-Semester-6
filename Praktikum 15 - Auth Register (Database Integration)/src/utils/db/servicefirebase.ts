import { 
  getFirestore,
   collection,
    getDocs,
    Firestore,
    getDoc,
    doc,
    query,
    addDoc,
    where, 
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const Snapshot = await getDocs(collection(db, collectionName));
  const data = Snapshot.docs.map((doc) => ({ 
    id: doc.id,
     ...doc.data(),
    }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) { 
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Jika data.length === 0, berarti email belum dipakai -> Boleh daftar
  if (data.length === 0) {
    // Jangan lupa hilangkan comment pada addDoc agar data tersimpan!
    await addDoc(collection(db, "users"), userData);
    
    callback({
      status: "success",
      message: "User registered successfully",
    });
  } else {
    // Jika email sudah ada di database -> Error
    callback({
      status: "error",
      message: "User already exists",
    });
  }
}
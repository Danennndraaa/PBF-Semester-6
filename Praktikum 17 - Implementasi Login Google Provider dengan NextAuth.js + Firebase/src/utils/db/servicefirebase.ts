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
    updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

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

export async function signIn(
  email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  }else {
    return null;
  }
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
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

  // Jika data.length === 0, berarti email belum dipakai -> BOLEH DAFTAR
  if (data.length === 0) {
    // 1. Hash password dan set role di sini (sebelum disimpan)
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";

    // 2. Simpan ke database
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: "success",
          message: "User registered successfully",
        });
      })
      .catch((error) => {
        callback({
          status: "error",
          message: error.message,
        });
      });
  } else {
    // Jika data.length > 0, email SUDAH DIPAKAI -> ERROR! Jangan simpan data.
    callback({
      status: "error",
      message: "User already exists",
    });
  }
}

export async function signInWithGoogle(userData: any, callback: any) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );

    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      // User sudah ada, update data
      userData.role = data[0].role;
      await updateDoc(doc(db, "users", data[0].id), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    } else {
      // User baru, tambah data
      userData.role = "member";
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    }
  } catch (error: any) {
    // Tangani error di sini
    callback({
      status: false,
      message: "Failed to register user with Google",
    });
  }
}
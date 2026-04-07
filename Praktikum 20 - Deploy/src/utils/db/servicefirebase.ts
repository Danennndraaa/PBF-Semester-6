import { 
  getFirestore,
  collection,
  getDocs,
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

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) {
    return data[0];
  } else {
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

  if (data.length === 0) {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";

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
    callback({
      status: "error",
      message: "User already exists",
    });
  }
}

// ============================================================================
// FUNGSI OAUTH REUSABLE (Dapat digunakan untuk provider apapun)
// ============================================================================
async function handleOAuthLogin(userData: any, defaultRole: string, callback: any) {
  try {
    // Mengecek berdasarkan email DAN type (otomatis mengambil dari userData.type)
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
      where("type", "==", userData.type), 
    );

    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      // User sudah ada, pertahankan role lama lalu update data lainnya
      userData.role = data[0].role;
      await updateDoc(doc(db, "users", data[0].id), userData);
      callback({
        status: true,
        message: `User logged in with ${userData.type}`,
        data: userData,
      });
    } else {
      // User baru, gunakan defaultRole yang dikirim lewat parameter
      userData.role = defaultRole;
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: `User registered and logged in with ${userData.type}`,
        data: userData,
      });
    }
  } catch (error: any) {
    callback({
      status: false,
      message: `Failed to authenticate user with ${userData.type}`,
    });
  }
}

// ----------------------------------------------------------------------------
// WRAPPER FUNCTION (Agar file [...nextauth].ts tidak error)
// ----------------------------------------------------------------------------
export async function signInWithGoogle(userData: any, callback: any) {
  // Lempar data ke fungsi reusable dengan default role "member"
  return handleOAuthLogin(userData, "member", callback);
}

export async function signInWithGithub(userData: any, callback: any) {
  // Lempar data ke fungsi reusable dengan default role "editor"
  return handleOAuthLogin(userData, "editor", callback);
}
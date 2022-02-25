import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase.js";

const getScreams = async (req, res) => {
  try {
    const screams = [];
    const queryData = query(
      collection(db, "screams"),
      orderBy("createdAt", "desc")
    );
    const result = await getDocs(queryData);
    result.forEach((doc) =>
      screams.push({
        screamId: doc.id,
        ...doc.data(),
      })
    );
    return res.json(screams);
  } catch (err) {
    console.log(err);
  }
};

const createScreams = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(404).json({ error: "Method is not allowed" });
  }
  const { userHandle, body } = req.body;
  const newScreams = {
    userHandle,
    body,
    createdAt: Timestamp.now(),
  };
  try {
    const doc = await addDoc(collection(db, "screams"), newScreams);
    res.json({ msg: `screams with ${doc.id} created` });
  } catch (err) {
    console.log(`${err}`.red.bold);
  }
};

export { getScreams, createScreams };

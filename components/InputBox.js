import Image from "next/image";
import { useSession } from "next-auth/react";

import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";

import { useState } from "react";
import firebase from "firebase";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_changed",
            null,
            (error) => console.error(error),
            () => {
              //when the upload completes
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="mt-6 bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium">
      <div className="flex space-x-4 items-center">
        <Image
          alt=""
          src={session.user.image}
          className="rounded-full"
          unoptimized
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1" method="POST">
          <input
            type="text"
            placeholder={`what's on your mind , ${session.user.name}?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            ref={inputRef}
          />
          <button hidden onClick={sendPost} type="submit" id="btn">
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            className="flex flex-col  filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <Image
              className="h-10 object-contain"
              src={imageToPost}
              alt=""
              unoptimized
              height={50}
              width={50}
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly border-t mt-4 p-3">
        <div className="input-icon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        {/* Camera icon part */}
        <div
          onClick={() => filePickerRef.current.click()}
          className="input-icon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="input-icon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;

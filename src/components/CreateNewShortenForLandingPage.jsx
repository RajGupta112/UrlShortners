import React, { useState } from 'react';
import { useStoreContext } from '../context/ContextApi';
import { useForm } from 'react-hook-form';
import TextField from '../components/TextField';
import { RxCross2 } from 'react-icons/rx';
import api from '../api/api';
import toast from 'react-hot-toast';

const CreateNewShortenForLandingPage = ({ onClose, refetch }) => {
  const { token } = useStoreContext();
  const [Loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${res.shortUrl}`;
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Short URL Copied to Clipboard", {
          position: "bottom-center",
          className: "mb-5",
          duration: 3000,
        });
      });

      reset();
      onClose(); // ✅ Close the modal
    } catch (error) {
      console.error("Failed to create short URL", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden relative">

        {/* 🔴 Custom Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-700 hover:text-red-500 text-2xl transition"
          aria-label="Close Modal"
        >
          <RxCross2 />
        </button>

        <form onSubmit={handleSubmit(createShortUrlHandler)} className="p-6 sm:p-8">
          <h1 className="font-montserrat text-center font-bold text-2xl text-slate-800 mb-4">
            Create New Shorten Url
          </h1>
          <hr className="border-slate-200 mb-6" />

          <TextField
            label="Enter URL"
            required
            id="originalUrl"
            placeholder="https://example.com"
            type="url"
            message="Url is required"
            register={register}
            errors={errors}
          />

          <button
            disabled={Loading}
            className="w-full bg-blue-600 font-semibold text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition-colors"
          >
            {Loading ? "Loading..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewShortenForLandingPage;

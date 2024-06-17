import { useRouter } from "next/router";
import React, { useState } from "react";
import { Slide, toast } from "react-toastify";
import Loader from "./Loader";

const Catalogue = () => {
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Message: '',
        title1: 'Download',
        title2: 'Catalogue'
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setLoading(false);
                handleDownload();
                toast.success('Catalogue Download successfully.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                router.push('/');
            } else {
                setLoading(false);
                toast.error('Catalogue Download Failed.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                router.push('/');
            }
        } catch (error) {
            setLoading(false);
            toast.error('Catalogue Download Failed.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            router.push('/');
        }

        setIsModalOpen(false);
    };

    function handleDownload() {
        const pdfFilePath = "/assets/pdf/Catalogue_sample.pdf";

        const link = document.createElement("a");
        link.href = pdfFilePath;
        link.download = "Catalogue_sample.pdf";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    }

    return (
        <>
            <div className="wrapper bg-[#00000010] p-5 mb-[20px]" >
                <div className="company-hover">
                    <div className="row gx-5">
                        <div className="col-md-8 d-flex align-items-center ">
                            <div className="text-wrapper">
                                <h6 className="text-uppercase text-lg">
                                    DOWNLOAD LATEST COLLECTION’S CATALOGUE from Flowless
                                    International
                                </h6>
                                <p className="mt-4">
                                    Experience the unparalleled elegance and versatility of
                                    Flowless International&apos;s premium tile and stone
                                    collections by downloading our comprehensive catalogue today.
                                </p>
                                <div className="mt-[30px] tempcolor">
                                    <button onClick={() => setIsModalOpen(true)}>Download Catalogue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
                    {!loading && (<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                        <form className="relative mb-6" onSubmit={handleSubmit}>
                            <div className="relative mb-6">
                                <fieldset>
                                    <input
                                        className="form-control w-full p-2 border border-gray-300 rounded"
                                        type="text"
                                        name="Name"
                                        id="name"
                                        placeholder="Name"
                                        required
                                        value={formData.Name}
                                        onChange={handleChange}
                                    />
                                </fieldset>
                            </div>
                            <div className="relative mb-6">
                                <fieldset>
                                    <input
                                        className="form-control w-full p-2 border border-gray-300 rounded"
                                        type="text"
                                        name="Surname"
                                        id="Surname"
                                        placeholder="Surname"
                                        required
                                        value={formData.Surname}
                                        onChange={handleChange}
                                    />
                                </fieldset>
                            </div>
                            <div className="relative mb-6">
                                <fieldset>
                                    <input
                                        className="form-control w-full p-2 border border-gray-300 rounded"
                                        type="email"
                                        name="Email"
                                        id="email"
                                        pattern="[^ @]*@[^ @]*"
                                        placeholder="Your Email"
                                        required
                                        value={formData.Email}
                                        onChange={handleChange}
                                    />
                                </fieldset>
                            </div>
                            <div className="relative mb-6">
                                <fieldset>
                                    <textarea
                                        name="Message"
                                        className="form-control w-full p-2 border border-gray-300 rounded"
                                        id="message"
                                        placeholder="Message"
                                        value={formData.Message}
                                        required
                                        onChange={handleChange}
                                    />
                                </fieldset>
                            </div>
                            <div className="tempcolor flex justify-center items-center w-full">
                                <button type="submit" id="form-submit" className="main-button">
                                    Download
                                </button>
                            </div>
                        </form>
                        <button
                            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsModalOpen(false)}>&times;
                        </button>
                    </div>)}
                    {loading && (<Loader />)}
                </div>
            )}
        </>
    );
};

export default Catalogue;